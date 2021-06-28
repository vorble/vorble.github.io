"use strict";
class Party {
    constructor() {
        this.size = 0;
        this.gold = 0;
        this.blood = 0;
        this.food = 0;
        this.hunger = 0;
        this.water = 0;
        this.thirst = 0;
        this.quests = 0;
        this.questsCompleted = 0;
        this.questPoints = 0;
        this.damage = 0;
        this.dealignmentProtection = 0;
        this.strbase = 0;
        this.dexbase = 0;
        this.conbase = 0;
        this.intbase = 0;
        this.wisbase = 0;
        this.chabase = 0;
        this.strmod = 0;
        this.dexmod = 0;
        this.conmod = 0;
        this.intmod = 0;
        this.wismod = 0;
        this.chamod = 0;
        this.inventoryWeapon = new EquipmentInventory();
        this.inventoryArmor = new EquipmentInventory();
        this.weaponPoints = 0;
        this.weaponConfig = new Equipment();
        this.weapon = new Equipment();
        this.armorPoints = 0;
        this.armorConfig = new Equipment();
        this.armor = new Equipment();
        this.items = new ItemInventory();
        this.status = new Status();
        this.skills = new Skills();
    }
    get str() {
        return Math.max(0, this.strbase + this.strmod);
    }
    get dex() {
        return Math.max(0, this.dexbase + this.dexmod);
    }
    get con() {
        return Math.max(0, this.conbase + this.conmod);
    }
    get int() {
        return Math.max(0, this.intbase + this.intmod);
    }
    get wis() {
        return Math.max(0, this.wisbase + this.wismod);
    }
    get cha() {
        return Math.max(0, this.chabase + this.chamod);
    }
    get health() {
        return Math.max(0, this.size * PARTY_MEMBER_HP - this.damage);
    }
}
//# sourceMappingURL=party.js.map