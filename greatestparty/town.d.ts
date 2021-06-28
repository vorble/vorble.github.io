interface TownHooks extends ClockActions {
    onTownArrive?: (game: Game) => void;
    onTownDepart?: (game: Game) => void;
}
interface TownEvent {
    name: string;
    weight: number;
    predicate?: (game: Game) => boolean;
    action: (game: Game) => void;
}
interface TownQuest {
    name: string;
    weight: number;
    predicate?: (game: Game) => boolean;
    action: (game: Game) => void;
}
interface TownEnvironment {
    name: string;
    weight: number;
    predicate?: (game: Game) => boolean;
    action: (game: Game) => void;
}
declare type TownSeasonVector = [number, number, number, number];
declare class Town {
    name: string;
    townsfolk: number;
    hireCost: number;
    conscriptRatio: number;
    conscriptViolenceRatio: number;
    alignment: number;
    need: number;
    needMax: number;
    needRatio: number;
    enemyRatio: number;
    goldPerQuest: number;
    foodStock: number;
    foodSupport: TownSeasonVector;
    foodCostBuy: TownSeasonVector;
    foodCostSell: TownSeasonVector;
    waterStock: number;
    waterSupport: TownSeasonVector;
    waterCostBuy: TownSeasonVector;
    waterCostSell: TownSeasonVector;
    inventoryWeapon: EquipmentInventory;
    inventoryWeaponBuy: EquipmentInventory;
    inventoryWeaponSell: EquipmentInventory;
    inventoryArmor: EquipmentInventory;
    inventoryArmorBuy: EquipmentInventory;
    inventoryArmorSell: EquipmentInventory;
    state: unknown;
    hooks: TownHooks;
    events: Array<TownEvent>;
    quests: Array<TownQuest>;
    enemies: Array<EnemyTemplate>;
    bosses: Array<EnemyTemplate>;
    constructor();
}
