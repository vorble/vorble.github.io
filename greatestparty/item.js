"use strict";
const ITEM_NAMES_STAT_BUFF = ['potionStrUp1', 'potionDexUp1', 'potionConUp1', 'potionIntUp1', 'potionWisUp1', 'potionChaUp1'];
const ITEM_NAMES_STAT_BOOST = ['tomeStrUp', 'tomeDexUp', 'tomeConUp', 'tomeIntUp', 'tomeWisUp', 'tomeChaUp'];
const ITEM_NAMES_CONSUMABLE = ['potionAntidote', 'potionHealth', 'clericRobes', 'potionEnrage', 'gobletBlood', 'pocketAutomaton', 'basicProvisions'];
const ITEM_NAMES_EQUIPMENT_BOOST = ['boostWeapon', 'boostArmor'];
const ITEM_NAMES = [...ITEM_NAMES_STAT_BUFF, ...ITEM_NAMES_STAT_BOOST, ...ITEM_NAMES_CONSUMABLE, ...ITEM_NAMES_EQUIPMENT_BOOST];
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
        this.tomeStrUp = Object.assign(Object.assign({}, defaults), { name: 'Tome of STR', use: (game) => {
                game.party.strbase += 1;
                game.log('Your party\'s STR has increased!');
            } });
        this.tomeDexUp = Object.assign(Object.assign({}, defaults), { name: 'Tome of DEX', use: (game) => {
                game.party.dexbase += 1;
                game.log('Your party\'s DEX has increased!');
            } });
        this.tomeConUp = Object.assign(Object.assign({}, defaults), { name: 'Tome of CON', use: (game) => {
                game.party.conbase += 1;
                game.log('Your party\'s CON has increased!');
            } });
        this.tomeIntUp = Object.assign(Object.assign({}, defaults), { name: 'Tome of INT', use: (game) => {
                game.party.intbase += 1;
                game.log('Your party\'s INT has increased!');
            } });
        this.tomeWisUp = Object.assign(Object.assign({}, defaults), { name: 'Tome of WIS', use: (game) => {
                game.party.wisbase += 1;
                game.log('Your party\'s WIS has increased!');
            } });
        this.tomeChaUp = Object.assign(Object.assign({}, defaults), { name: 'Tome of CHA', use: (game) => {
                game.party.chabase += 1;
                game.log('Your party\'s CHA has increased!');
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
        this.potionEnrage = Object.assign(Object.assign({}, defaults), { name: 'Enrage Potion', use: (game) => {
                game.party.status.addStatus(game, {
                    name: 'Enrage',
                    enrage: true,
                    tock: 2,
                });
            } });
        this.gobletBlood = Object.assign(Object.assign({}, defaults), { name: 'Goblet of Blood', use: (game) => {
                const amount = rollRange(1, 3);
                game.party.blood += amount;
                game.log('Your party receives ' + amount + ' unit' + (amount == 1 ? '' : 's') + ' of blood.');
            } });
        this.pocketAutomaton = Object.assign(Object.assign({}, defaults), { name: 'Pocket Automaton', use: (game) => {
                game.party.size += 1;
                game.log('The automaton springs to life. Your party grows.');
            } });
        this.basicProvisions = Object.assign(Object.assign({}, defaults), { name: 'Basic Provisions', use: (game) => {
                const foodAmount = rollRange(3, 10);
                const waterAmount = rollRange(3, 10);
                game.party.food += foodAmount;
                game.party.water += waterAmount;
                game.log('Your party opens the provisions and receives ' + foodAmount + ' food and ' + waterAmount + ' water.');
            } });
        this.boostWeapon = Object.assign(Object.assign({}, defaults), { name: 'Boost Weapon', use: (game) => {
                game.party.weaponPoints += 1;
                game.log('Your party may now allocate ' + game.party.weaponPoints + ' weapon points.');
            } });
        this.boostArmor = Object.assign(Object.assign({}, defaults), { name: 'Boost Armor', use: (game) => {
                game.party.armorPoints += 1;
                game.log('Your party may now allocate ' + game.party.armorPoints + ' armor points.');
            } });
    }
}
//# sourceMappingURL=item.js.map