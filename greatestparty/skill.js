"use strict";
const SKILLS = ['initiative', 'inspire', 'sacrifice', 'conscript', 'animate', 'sabotage', 'acclaim', 'rationing'];
class Skills {
    constructor() {
        const defaults = { level: 0 };
        this.initiative = Object.assign(Object.assign({}, defaults), { name: 'Initiative', levelMax: 9999, costTier: 1, unlockAtCompletedQuests: 10, doTickActions: (game) => {
                // Party members show initiative and will pick up quests on their own periodically.
                if (rollRatio() < 0.01 * this.initiative.level) {
                    if (game.town.need > 0) {
                        game.takeQuest();
                    }
                }
            } });
        this.inspire = Object.assign(Object.assign({}, defaults), { name: 'Inspire', levelMax: 9999, costTier: 2, unlockAtCompletedQuests: 20, doTickActions: (game) => {
                if (!game.party.status.outOfTown.active) {
                    let bonus = mod(game.party.cha, [[0, 0.000], [16, 0.001]]);
                    bonus += mod(game.town.alignment, [[-100, -0.002], [-30, 0], [30, 0.001]]);
                    if (rollRatio() < (0.0025 + bonus) * this.inspire.level) {
                        if (game.town.townsfolk > 0) {
                            game.log('Your party inspires some from the town to join.');
                            const count = Math.max(1, Math.floor(game.town.townsfolk * 0.01));
                            game.joinPartyFromTown(count);
                        }
                    }
                }
            } });
        this.sacrifice = Object.assign(Object.assign({}, defaults), { name: 'Sacrifice', levelMax: 9999, costTier: 2, unlockAtCompletedQuests: 30 });
        this.conscript = Object.assign(Object.assign({}, defaults), { name: 'Conscript', levelMax: 9999, costTier: 3, unlockAtCompletedQuests: 50 });
        this.animate = Object.assign(Object.assign({}, defaults), { name: 'Animate', levelMax: 9999, costTier: 3, unlockAtCompletedQuests: 50 });
        this.sabotage = Object.assign(Object.assign({}, defaults), { name: 'Sabotage', levelMax: 9999, costTier: 1, unlockAtCompletedQuests: 75, doTickActions: (game) => {
                if (!game.party.status.outOfTown.active) {
                    if (rollRatio() < 0.005 * game.party.skills.sabotage.level) {
                        const r = (rollDie(20)
                            + mod(game.party.dex, [[0, -3], [4, -2], [6, -1], [9, 0], [13, 1]])
                            + mod(game.party.int, [[0, -2], [4, -1], [7, 0], [14, 1]]));
                        if (r <= 2) {
                            game.log('Your party is noticed while sabotaging the town.');
                            game.adjustAlignment(-20);
                        }
                        else {
                            game.log('Your party sabotages the town.');
                        }
                        game.adjustTownNeed(1);
                    }
                }
            } });
        this.acclaim = Object.assign(Object.assign({}, defaults), { name: 'Acclaim', levelMax: 9999, costTier: 3, unlockAtCompletedQuests: 75, doTickActions: (game) => {
                if (!game.party.status.outOfTown.active) {
                    if (rollRatio() < 0.005 * game.party.skills.acclaim.level) {
                        const r = (rollDie(20)
                            + mod(game.party.cha, [[0, -2], [6, -1], [9, 0], [12, 1], [15, 2]]));
                        if (r >= 20) {
                            game.log('Your acclaim brings out the neediest in town.');
                            game.adjustTownNeed(2);
                        }
                        else {
                            game.log('Your acclaim produces additional opportunities in town.');
                            game.adjustTownNeed(1);
                        }
                    }
                }
            } });
        this.rationing = Object.assign(Object.assign({}, defaults), { name: 'Rationing', levelMax: 5, costTier: 5, unlockAtCompletedQuests: 150 });
    }
}
//# sourceMappingURL=skill.js.map