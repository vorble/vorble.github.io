"use strict";
const ITEM_NAMES_POTION = ['potionStrUp1', 'potionDexUp1', 'potionConUp1', 'potionIntUp1', 'potionWisUp1', 'potionChaUp1', 'potionAntidote', 'potionHealth'];
const ITEM_NAMES_CONSUMABLE = ['clericRobes'];
const ITEM_NAMES_BOOST = ['boostWeapon', 'boostArmor', 'tomeOfKnowledge'];
const ITEM_NAMES = [...ITEM_NAMES_POTION, ...ITEM_NAMES_CONSUMABLE, ...ITEM_NAMES_BOOST];
class ItemInventory {
    constructor() {
        const defaults = { quantity: 0 };
        this.potionStrUp1 = Object.assign(Object.assign({}, defaults), { name: 'Potion of STR', use: (game) => {
                game.party.status.addStatus(game, {
                    name: 'STR+',
                    tock: 100,
                    strmod: 1,
                });
            } });
        this.potionDexUp1 = Object.assign(Object.assign({}, defaults), { name: 'Potion of DEX', use: (game) => {
                game.party.status.addStatus(game, {
                    name: 'DEX+',
                    tock: 100,
                    dexmod: 1,
                });
            } });
        this.potionConUp1 = Object.assign(Object.assign({}, defaults), { name: 'Potion of CON', use: (game) => {
                game.party.status.addStatus(game, {
                    name: 'CON+',
                    tock: 100,
                    conmod: 1,
                });
            } });
        this.potionIntUp1 = Object.assign(Object.assign({}, defaults), { name: 'Potion of INT', use: (game) => {
                game.party.status.addStatus(game, {
                    name: 'INT+',
                    tock: 100,
                    intmod: 1,
                });
            } });
        this.potionWisUp1 = Object.assign(Object.assign({}, defaults), { name: 'Potion of WIS', use: (game) => {
                game.party.status.addStatus(game, {
                    name: 'WIS+',
                    tock: 100,
                    wismod: 1,
                });
            } });
        this.potionChaUp1 = Object.assign(Object.assign({}, defaults), { name: 'Potion of CHA', use: (game) => {
                game.party.status.addStatus(game, {
                    name: 'CHA+',
                    tock: 100,
                    chamod: 1,
                });
            } });
        this.potionAntidote = Object.assign(Object.assign({}, defaults), { name: 'Antidote', use: (game) => {
                game.party.status.poison.active = false;
            } });
        this.potionHealth = Object.assign(Object.assign({}, defaults), { name: 'Health Potion', use: (game) => {
                game.party.damage -= 100;
            } });
        this.clericRobes = Object.assign(Object.assign({}, defaults), { name: 'Cleric Robes', use: (game) => {
                game.party.dealignmentProtection += 50;
                game.log('Your party is temporarily protected from dealignment.');
            } });
        this.boostWeapon = Object.assign(Object.assign({}, defaults), { name: 'Boost Weapon', use: (game) => {
                game.party.weaponPoints += 1;
                game.log('Your party may now allocate ' + game.party.weaponPoints + ' weapon points.');
            } });
        this.boostArmor = Object.assign(Object.assign({}, defaults), { name: 'Boost Armor', use: (game) => {
                game.party.armorPoints += 1;
                game.log('Your party may now allocate ' + game.party.armorPoints + ' armor points.');
            } });
        this.tomeOfKnowledge = Object.assign(Object.assign({}, defaults), { name: 'Tome of Knowledge', use: (game) => {
                game.party.intbase += 1;
                game.log('Your party\'s intelligence has increased.');
            } });
    }
}
//# sourceMappingURL=item.js.map