"use strict";
const STATUSES = ['berzerk', 'islandCurse', 'angeredGods', 'poison', 'bleeding', 'outOfTown'];
function statusItemInput(status) {
    return Object.assign(Object.assign({ name: status.name }, clockInput(status)), { strmod: status.strmod || 0, dexmod: status.dexmod || 0, conmod: status.conmod || 0, intmod: status.intmod || 0, wismod: status.wismod || 0, chamod: status.chamod || 0, preventAttack: status.preventAttack || false, preventHeal: status.preventHeal || false, damagePerTick: status.damagePerTick || 0, damagePerTock: status.damagePerTock || 0 });
}
function statusIsExpired(game, status) {
    if (status.year == 0 && status.term == 0 && status.tock == 0 && status.tick == 0)
        return false;
    else if (game.year < status.year)
        return false;
    else if (game.year > status.year)
        return true;
    else if (game.season < status.season)
        return false;
    else if (game.season > status.season)
        return true;
    else if (game.term < status.term)
        return false;
    else if (game.term > status.term)
        return true;
    else if (game.tock < status.tock)
        return false;
    else if (game.tock > status.tock)
        return true;
    return game.tick >= status.tick;
}
function statusSetExpiry(game, status, length) {
    const clock = clockAdd(game, clockInput(length));
    status.year = clock.year;
    status.season = clock.season;
    status.term = clock.term;
    status.tock = clock.tock;
    status.tick = clock.tick;
    clockUnwrap(status);
}
class Status {
    constructor() {
        const defaults = { active: false, year: 0, season: 0, term: 0, tock: 0, tick: 0 };
        this.berzerk = Object.assign(Object.assign({}, defaults), { name: 'Berzerk', doTickActions: (game) => {
                if (!game.fightingBoss) {
                    game.log('Your party is berzerk and fights the boss, "I didn\'t hear a bell!"');
                    game.fightBoss();
                }
            } });
        this.islandCurse = Object.assign(Object.assign({}, defaults), { name: 'Island Curse' });
        this.angeredGods = Object.assign(Object.assign({}, defaults), { name: 'Angered Gods' });
        this.poison = Object.assign(Object.assign({}, defaults), { name: 'Poison' });
        this.bleeding = Object.assign(Object.assign({}, defaults), { name: 'Bleeding' });
        this.outOfTown = Object.assign(Object.assign({}, defaults), { name: 'Out of Town' });
        this.other = [];
    }
    doTickActions(game) {
        // TODO: Gross, filter with side effects!
        this.other = this.other.filter((status) => {
            if (clockCompare(status, game) < 0) {
                this._unapplyStatus(game, status);
                return false;
            }
            return true;
        });
    }
    hasPreventAttack() {
        for (const status of this.other) {
            if (status.preventAttack) {
                return true;
            }
        }
        return false;
    }
    addStatus(game, status) {
        const s = statusItemInput(status);
        statusSetExpiry(game, s, status);
        this.other.push(s);
        this._applyStatus(game, s);
    }
    _applyStatus(game, status) {
        game.party.strmod += status.strmod;
        game.party.dexmod += status.dexmod;
        game.party.conmod += status.conmod;
        game.party.intmod += status.intmod;
        game.party.wismod += status.wismod;
        game.party.chamod += status.chamod;
    }
    _unapplyStatus(game, status) {
        game.party.strmod -= status.strmod;
        game.party.dexmod -= status.dexmod;
        game.party.conmod -= status.conmod;
        game.party.intmod -= status.intmod;
        game.party.wismod -= status.wismod;
        game.party.chamod -= status.chamod;
    }
}
//# sourceMappingURL=status.js.map