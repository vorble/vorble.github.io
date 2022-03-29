import { playerLikeInput } from './player.js';
import { rollUniform, rollRatio } from './roll.js';
function dedupeNames(things) {
    const asciiA = 'A'.codePointAt(0);
    if (asciiA == null) {
        throw new Error('Couldn\'t find code point!');
    }
    const seen = new Map();
    const dupes = new Set();
    for (const thing of things) {
        const multiplicity = (seen.get(thing.name) || 0) + 1;
        seen.set(thing.name, multiplicity);
        if (multiplicity > 1) {
            dupes.add(thing.name);
        }
    }
    for (let i = things.length - 1; i >= 0; --i) {
        const thing = things[i];
        if (dupes.has(thing.name)) {
            const multiplicity = (seen.get(thing.name) || 0) - 1;
            seen.set(thing.name, multiplicity);
            const c = String.fromCodePoint(asciiA + multiplicity);
            thing.name += ' ' + c;
        }
    }
}
function calculateBattleDamagePhysical(a, d) {
    const oompf = rollUniform(1.0, 1.5);
    let dmgphy = a.dmgphy;
    if (d.resphy < 0) {
        dmgphy -= d.resphy; // Increases dmgphy by the negative amount of resphy
    }
    let dmg = Math.round(a.off * oompf + dmgphy);
    dmg = Math.max(0, dmg - Math.round(d.def / 3));
    dmg = Math.max(0, dmg - Math.round(Math.max(0, d.def - a.off) / 2));
    if (d.resphy > 0) {
        dmg = Math.max(0, dmg - d.resphy);
    }
    return dmg;
}
function calculateBattleDamageElemental(a, d) {
    const oompf = rollUniform(0.9, 1.1);
    let dmgele = a.dmgele;
    if (d.resele < 0) {
        dmgele -= d.resele; // Increases dmgele by the negative amount of resele
    }
    let dmg = Math.round((1 + a.off / 15.0) * oompf * dmgele);
    dmg = Math.max(0, dmg - Math.round(d.def / 3));
    if (d.resele > 0) {
        dmg = Math.max(0, dmg - d.resele);
    }
    return dmg;
}
function calculateBattleDamageMystic(a, d) {
    const oompf = rollUniform(0.5, 1.5) * (rollRatio() >= .333 ? 2 : 1);
    let dmgmys = a.dmgmys;
    if (d.resmys < 0) {
        dmgmys -= d.resmys; // Increases dmgmys by the negative amount of resmys
    }
    let dmg = Math.round(dmgmys * oompf);
    dmg = Math.max(0, dmg - Math.round(d.def / 6));
    if (d.resmys > 0) {
        dmg = Math.max(0, dmg - d.resmys);
    }
    return dmg;
}
function calculateBattleDamagePsychic(a, d) {
    const oompf = rollUniform(1.0, 1.25);
    const psybase = a.psy / 15;
    // Disparity in psy produces bonus damage.
    const psyboost = Math.max(a.psy - d.psy, 0) / 4;
    let dmgpsy = a.dmgpsy;
    if (d.respsy < 0) {
        dmgpsy -= d.respsy; // Increases dmgpsy by the negative amount of respsy
    }
    let dmg = Math.round((1 + psybase + psyboost) * oompf * dmgpsy);
    dmg = Math.max(0, dmg - Math.round(d.def / 4 + d.psy / 4));
    if (d.respsy > 0) {
        dmg = Math.max(0, dmg - d.respsy);
    }
    return dmg;
}
function battleMobInput(mob) {
    return {
        name: mob.name,
        exp: mob.exp,
        position: 'fight',
        attackCountdown: 10,
        nextAttack: null,
        decide: mob.decide ? mob.decide : () => null,
        ...playerLikeInput(mob),
        a0: 0, a1: 0, a2: 0, a3: 0,
        b0: 0, b1: 0, b2: 0, b3: 0,
    };
}
function makeBasicMobAttack() {
    return {
        powerIn: {
            fight: 100,
            guard: 'noact',
            left: 80,
            right: 80,
            back: 75,
            duck: 75,
        },
        powerAgainst: {
            fight: 100,
            guard: 75,
            left: 85,
            right: 85,
            back: 60,
            duck: 100,
        },
    };
}
function calculateBattleDamageBase(a, d) {
    const phy = calculateBattleDamagePhysical(a, d);
    const ele = calculateBattleDamageElemental(a, d);
    const mys = calculateBattleDamageMystic(a, d);
    const psy = calculateBattleDamagePsychic(a, d);
    return { phy, ele, mys, psy, total: phy + ele + mys + psy };
}
function lookupPA(round) {
    return round.attacker.attack.powerAgainst[round.defender.position];
}
function lookupPI(round) {
    return round.attacker.attack.powerIn[round.attacker.position];
}
function calculateBattleDamage(round) {
    // TODO: If offense is much less than defender's defense, there should be an increased chance of missing.
    const base = calculateBattleDamageBase(round.attacker.stats, round.defender.stats);
    let special = null;
    let damage = 0;
    let effective = 0;
    const pi = lookupPI(round);
    if (pi == 'noact') {
        special = 'noact';
    }
    else {
        damage = Math.round((pi / 100.0) * base.total);
    }
    const pa = lookupPA(round);
    if (pa == 'miss') {
        special = 'miss';
    }
    else {
        effective = Math.round((pa / 100.0) * damage);
    }
    return { ...base, pa, pi, effective, special };
}
export class Battle {
    constructor(game, battle) {
        this.game = game;
        this.postState = {
            state: game.state,
            targets: game.ui.targets.save(),
            actions: game.ui.actions.save(),
        };
        this.player = battleMobInput({ name: 'YOU', ...game.player });
        if (battle.mobs.length == 0) {
            throw new Error(`Cannot create battle with no mobs!`);
        }
        this.mobs = battle.mobs.map((mob) => battleMobInput(mob));
        dedupeNames(this.mobs);
        for (const mob of this.mobs) {
            this.doMobDecision(mob, true); // TODO: Maybe some sort of "first-decision" flag is needed
        }
        this.target = this.mobs[0];
        this.expTally = battle.bonusExp == null ? 0 : battle.bonusExp;
        this.winAction = battle.winAction;
        this.loseAction = battle.loseAction;
    }
    tick() {
        this.player.attackCountdown -= 1;
        if (this.player.attackCountdown <= 0) {
            this.doPlayerAttack(this.target);
            this.player.attackCountdown = 10;
        }
        const living = [];
        for (let i = 0; i < this.mobs.length; ++i) {
            const mob = this.mobs[i];
            // Because of the player attack, the mob might be dead already.
            if (mob.resources.hp > 0) {
                mob.attackCountdown -= 1;
                this.doMobDecision(mob, false);
                if (mob.attackCountdown <= 0) {
                    this.doMobAttack(mob);
                    this.doMobDecision(mob, true);
                }
            }
            if (mob.resources.hp > 0) {
                living.push(mob);
            }
            else {
                this.game.ui.narration.append(`${mob.name} dies!`);
                this.expTally += mob.exp;
            }
        }
        // TODO: end determination and UI update paths could use some work.
        let end = false;
        this.mobs = living;
        if (this.player.resources.hp <= 0) {
            end = true;
            this.game.ui.narration.append(`The world around goes dark as you lose consciousness.`);
        }
        if (living.length == 0) {
            end = true;
        }
        else {
            if (this.mobs.indexOf(this.target) < 0) {
                this.target = this.mobs[0];
            }
            this.game.ui.hp.set(this.player.resources.hp, this.player.hp);
            this.game.ui.mp.set(this.player.resources.mp, this.player.mp);
            this.game.ui.pp.set(this.player.resources.pp, this.player.pp);
            this.updateBattleButtons();
        }
        if (end) {
            this.end();
        }
    }
    doPlayerAttack(mob) {
        const damage = calculateBattleDamage({
            attacker: {
                attack: makeBasicMobAttack(),
                position: this.player.position,
                stats: this.player,
            },
            defender: {
                position: mob.position,
                stats: mob,
            },
        });
        mob.resources.hp = Math.max(0, mob.resources.hp - damage.effective);
        const detail = this.game.DEBUG_BATTLE ? ' ' + JSON.stringify(damage).replace(/:/g, ': ') : '';
        let message = '';
        if (damage.special == null) {
            message = `You attack ${mob.name} and deliver ${damage.effective} damage${detail}!`;
        }
        else if (damage.special == 'noact') {
            message = `You are unable to attack ${mob.name} in your current position${detail}!`;
        }
        else if (damage.special == 'miss') {
            message = `You fail to hit ${mob.name}${detail}!`;
        }
        else {
            throw new Error(`Assertion error, unhandled special ${damage.special}.`); // TODO How to make this a type error?
        }
        this.game.ui.narration.append(message);
    }
    doMobAttack(mob) {
        const damage = calculateBattleDamage({
            attacker: {
                attack: mob.nextAttack == null ? makeBasicMobAttack() : mob.nextAttack,
                position: mob.position,
                stats: mob,
            },
            defender: {
                position: this.player.position,
                stats: this.player,
            },
        });
        this.player.resources.hp = Math.max(0, this.player.resources.hp - damage.effective);
        const detail = this.game.DEBUG_BATTLE ? ' ' + JSON.stringify(damage).replace(/:/g, ': ') : '';
        let message = '';
        if (damage.special == null) {
            if (mob.nextAttack && mob.nextAttack.specialNarrationDo) {
                message = `${mob.nextAttack.specialNarrationDo} You receive ${damage.effective} damage${detail}!`;
            }
            else {
                message = `${mob.name} attacks and delivers ${damage.effective} damage${detail}!`;
            }
        }
        else if (damage.special == 'noact') {
            message = `${mob.name} is unable to attack in its current position${detail}!`;
        }
        else if (damage.special == 'miss') {
            if (mob.nextAttack && mob.nextAttack.specialNarrationDo) {
                message = `${mob.nextAttack.specialNarrationDo} ${mob.name} fails to hit you${detail}!`;
            }
            else {
                message = `${mob.name} fails to hit you${detail}!`;
            }
        }
        else {
            throw new Error(`Assertion error, unhandled special ${damage.special}.`); // TODO How to make this a type error?
        }
        this.game.ui.narration.append(message);
    }
    doMobDecision(mob, oldActionDone) {
        const decide = mob.decide(mob, this, oldActionDone);
        if (decide == null) {
            if (oldActionDone) {
                mob.nextAttack = null;
                mob.attackCountdown = 10;
                this.doMobGoPosition(mob, 'fight');
            }
        }
        else {
            if (decide.nextAttack) {
                mob.nextAttack = decide.nextAttack;
            }
            else {
                if (oldActionDone) {
                    mob.nextAttack = null;
                }
            }
            if (typeof decide.attackCountdown == 'number') {
                mob.attackCountdown = decide.attackCountdown;
            }
            else {
                if (oldActionDone) {
                    mob.attackCountdown = 10;
                }
            }
            if (decide.position) {
                this.doMobGoPosition(mob, decide.position);
            }
            else {
                if (oldActionDone) {
                    this.doMobGoPosition(mob, 'fight');
                }
            }
            if (decide.initialNarration) {
                this.game.ui.narration.append(decide.initialNarration);
            }
        }
    }
    end() {
        const result = this.player.resources.hp <= 0 ? 'lose' : 'win';
        this.game.endBattle(result);
    }
    updateBattleButtons() {
        const mobs = this.mobs.map((mob) => {
            return {
                text: (this.target == mob ? '*' : '') + mob.name,
                action: () => {
                    this.target = mob,
                        this.updateBattleButtons();
                },
            };
        });
        this.game.ui.targets.setTargets(mobs);
        const blank = { text: ``, action: () => { } };
        this.game.ui.actions.setActions([
            blank, blank, blank,
            {
                text: (this.player.position == 'left' ? '*' : '') + `Left`,
                action: () => {
                    this.doGoPosition('left');
                },
            },
            {
                text: (this.player.position == 'fight' ? '*' : '') + `Fight`,
                action: () => {
                    this.doGoPosition('fight');
                },
            },
            {
                text: (this.player.position == 'right' ? '*' : '') + `Right`,
                action: () => {
                    this.doGoPosition('right');
                },
            },
            {
                text: (this.player.position == 'back' ? '*' : '') + `Back`,
                action: () => {
                    this.doGoPosition('back');
                },
            },
            {
                text: (this.player.position == 'guard' ? '*' : '') + `Guard`,
                action: () => {
                    this.doGoPosition('guard');
                },
            },
            {
                text: (this.player.position == 'duck' ? '*' : '') + `Duck`,
                action: () => {
                    this.doGoPosition('duck');
                },
            },
        ]);
    }
    doMobGoPosition(mob, position) {
        if (position != mob.position) {
            mob.position = position;
            switch (position) {
                case 'fight':
                    this.game.ui.narration.append(`${mob.name} assumes a fighting position.`);
                    break;
                case 'guard':
                    this.game.ui.narration.append(`${mob.name} assumes a guarding position.`);
                    break;
                case 'left':
                    this.game.ui.narration.append(`${mob.name} moves to the left.`);
                    break;
                case 'right':
                    this.game.ui.narration.append(`${mob.name} moves to the right.`);
                    break;
                case 'back':
                    this.game.ui.narration.append(`${mob.name} moves back.`);
                    break;
                case 'duck':
                    this.game.ui.narration.append(`${mob.name} gets low to the ground.`);
                    break;
                default:
                    // TODO: How to make having new ones be a type error?
                    throw new Error(`Assertion error, ${position} unhandled.`);
                    break;
            }
        }
    }
    doGoPosition(position) {
        if (position != this.player.position) {
            this.player.position = position;
            switch (position) {
                case 'fight':
                    this.game.ui.narration.append(`You assume a fighting position.`);
                    break;
                case 'guard':
                    this.game.ui.narration.append(`You assume a guarding position.`);
                    break;
                case 'left':
                    this.game.ui.narration.append(`You move to the left.`);
                    break;
                case 'right':
                    this.game.ui.narration.append(`You move to the right.`);
                    break;
                case 'back':
                    this.game.ui.narration.append(`You move back.`);
                    break;
                case 'duck':
                    this.game.ui.narration.append(`You get low to the ground.`);
                    break;
                default:
                    // TODO: How to make having new ones be a type error?
                    throw new Error(`Assertion error, ${position} unhandled.`);
                    break;
            }
            this.updateBattleButtons();
        }
    }
}
