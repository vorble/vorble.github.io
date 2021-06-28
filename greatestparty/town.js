"use strict";
class Town {
    constructor() {
        this.name = 'Town';
        this.townsfolk = 0;
        this.hireCost = 0;
        this.conscriptRatio = 0;
        this.conscriptViolenceRatio = 0;
        this.alignment = 0;
        this.need = 0;
        this.needMax = 0;
        this.needRatio = 0;
        this.enemyRatio = 0;
        this.goldPerQuest = 0;
        this.foodStock = 0;
        this.foodSupport = [0, 0, 0, 0];
        this.foodCostBuy = [0, 0, 0, 0];
        this.foodCostSell = [0, 0, 0, 0];
        this.waterStock = 0;
        this.waterSupport = [0, 0, 0, 0];
        this.waterCostBuy = [0, 0, 0, 0];
        this.waterCostSell = [0, 0, 0, 0];
        this.inventoryWeapon = new EquipmentInventory();
        this.inventoryWeaponBuy = new EquipmentInventory();
        this.inventoryWeaponSell = new EquipmentInventory();
        this.inventoryArmor = new EquipmentInventory();
        this.inventoryArmorBuy = new EquipmentInventory();
        this.inventoryArmorSell = new EquipmentInventory();
        this.state = {};
        this.hooks = {};
        this.events = [];
        this.quests = [];
        this.enemies = [];
        this.bosses = [];
    }
}
//# sourceMappingURL=town.js.map