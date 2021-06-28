declare const _getElementByIdHistory: Set<string>;
declare function getElementById(id: string): HTMLElement;
declare function getElementByIdAsType<T extends HTMLElement>(id: string, clazz: {
    new (): T;
}): T;
declare class UIParty {
    game: Game;
    date: HTMLElement;
    size: HTMLElement;
    health: HTMLElement;
    quests: HTMLElement;
    questsCompleted: HTMLElement;
    gold: HTMLElement;
    blood: HTMLElement;
    food: HTMLElement;
    water: HTMLElement;
    str: HTMLElement;
    dex: HTMLElement;
    con: HTMLElement;
    int: HTMLElement;
    wis: HTMLElement;
    cha: HTMLElement;
    status: HTMLElement;
    sacrificeButton: HTMLButtonElement;
    animateButton: HTMLButtonElement;
    constructor(game: Game);
    show(): void;
}
declare type UIEquipmentCheckboxes = [HTMLInputElement, HTMLInputElement, HTMLInputElement];
interface UIEquipmentType {
    blunt: UIEquipmentCheckboxes;
    slice: UIEquipmentCheckboxes;
    dark: UIEquipmentCheckboxes;
    light: UIEquipmentCheckboxes;
    fire: UIEquipmentCheckboxes;
    ice: UIEquipmentCheckboxes;
}
declare class UIEquipment {
    game: Game;
    weapon: HTMLElement;
    armor: HTMLElement;
    weaponConfig: UIEquipmentType;
    armorConfig: UIEquipmentType;
    constructor(game: Game);
    onChange(e: Event): boolean;
    show(): void;
}
declare class UITown {
    game: Game;
    townsfolk: HTMLElement;
    hireCost: HTMLElement;
    need: HTMLElement;
    enemy: HTMLElement;
    hire: HTMLButtonElement;
    conscript: HTMLButtonElement;
    takeQuest: HTMLButtonElement;
    fightBoss: HTMLButtonElement;
    pause: HTMLButtonElement;
    constructor(game: Game);
    show(): void;
}
declare class UIShop {
    game: Game;
    foodCostBuy: HTMLElement;
    foodCostSell: HTMLElement;
    waterCostBuy: HTMLElement;
    waterCostSell: HTMLElement;
    weaponBluntCostBuy: HTMLElement;
    weaponBluntCostSell: HTMLElement;
    weaponBluntCount: HTMLElement;
    weaponSliceCostBuy: HTMLElement;
    weaponSliceCostSell: HTMLElement;
    weaponSliceCount: HTMLElement;
    weaponDarkCostBuy: HTMLElement;
    weaponDarkCostSell: HTMLElement;
    weaponDarkCount: HTMLElement;
    weaponLightCostBuy: HTMLElement;
    weaponLightCostSell: HTMLElement;
    weaponLightCount: HTMLElement;
    weaponFireCostBuy: HTMLElement;
    weaponFireCostSell: HTMLElement;
    weaponFireCount: HTMLElement;
    weaponIceCostBuy: HTMLElement;
    weaponIceCostSell: HTMLElement;
    weaponIceCount: HTMLElement;
    armorBluntCostBuy: HTMLElement;
    armorBluntCostSell: HTMLElement;
    armorBluntCount: HTMLElement;
    armorSliceCostBuy: HTMLElement;
    armorSliceCostSell: HTMLElement;
    armorSliceCount: HTMLElement;
    armorDarkCostBuy: HTMLElement;
    armorDarkCostSell: HTMLElement;
    armorDarkCount: HTMLElement;
    armorLightCostBuy: HTMLElement;
    armorLightCostSell: HTMLElement;
    armorLightCount: HTMLElement;
    armorFireCostBuy: HTMLElement;
    armorFireCostSell: HTMLElement;
    armorFireCount: HTMLElement;
    armorIceCostBuy: HTMLElement;
    armorIceCostSell: HTMLElement;
    armorIceCount: HTMLElement;
    foodBuyButton: HTMLButtonElement;
    foodSellButton: HTMLButtonElement;
    waterBuyButton: HTMLButtonElement;
    waterSellButton: HTMLButtonElement;
    weaponBluntBuyButton: HTMLButtonElement;
    weaponBluntSellButton: HTMLButtonElement;
    weaponSliceBuyButton: HTMLButtonElement;
    weaponSliceSellButton: HTMLButtonElement;
    weaponDarkBuyButton: HTMLButtonElement;
    weaponDarkSellButton: HTMLButtonElement;
    weaponLightBuyButton: HTMLButtonElement;
    weaponLightSellButton: HTMLButtonElement;
    weaponFireBuyButton: HTMLButtonElement;
    weaponFireSellButton: HTMLButtonElement;
    weaponIceBuyButton: HTMLButtonElement;
    weaponIceSellButton: HTMLButtonElement;
    armorBluntBuyButton: HTMLButtonElement;
    armorBluntSellButton: HTMLButtonElement;
    armorSliceBuyButton: HTMLButtonElement;
    armorSliceSellButton: HTMLButtonElement;
    armorDarkBuyButton: HTMLButtonElement;
    armorDarkSellButton: HTMLButtonElement;
    armorLightBuyButton: HTMLButtonElement;
    armorLightSellButton: HTMLButtonElement;
    armorFireBuyButton: HTMLButtonElement;
    armorFireSellButton: HTMLButtonElement;
    armorIceBuyButton: HTMLButtonElement;
    armorIceSellButton: HTMLButtonElement;
    constructor(game: Game);
    show(): void;
}
declare class UISkills {
    game: Game;
    initiativeEntry: HTMLElement;
    initiativeBuy: HTMLElement;
    initiativeLevel: HTMLElement;
    initiativeBuyButton: HTMLButtonElement;
    inspireEntry: HTMLElement;
    inspireBuy: HTMLElement;
    inspireLevel: HTMLElement;
    inspireBuyButton: HTMLButtonElement;
    sacrificeEntry: HTMLElement;
    sacrificeBuy: HTMLElement;
    sacrificeLevel: HTMLElement;
    sacrificeBuyButton: HTMLButtonElement;
    conscriptEntry: HTMLElement;
    conscriptBuy: HTMLElement;
    conscriptLevel: HTMLElement;
    conscriptBuyButton: HTMLButtonElement;
    animateEntry: HTMLElement;
    animateBuy: HTMLElement;
    animateLevel: HTMLElement;
    animateBuyButton: HTMLButtonElement;
    sabotageEntry: HTMLElement;
    sabotageBuy: HTMLElement;
    sabotageLevel: HTMLElement;
    sabotageBuyButton: HTMLButtonElement;
    acclaimEntry: HTMLElement;
    acclaimBuy: HTMLElement;
    acclaimLevel: HTMLElement;
    acclaimBuyButton: HTMLButtonElement;
    constructor(game: Game);
    show(): void;
}
declare class UIItemsEntry {
    entry: HTMLElement;
    quantity: HTMLElement;
    use: HTMLButtonElement;
    constructor(name: ItemNameType);
}
declare class UIItems {
    game: Game;
    potionStrUp1: UIItemsEntry;
    potionDexUp1: UIItemsEntry;
    potionConUp1: UIItemsEntry;
    potionIntUp1: UIItemsEntry;
    potionWisUp1: UIItemsEntry;
    potionChaUp1: UIItemsEntry;
    potionAntidote: UIItemsEntry;
    potionHealth: UIItemsEntry;
    clericRobes: UIItemsEntry;
    boostWeapon: UIItemsEntry;
    boostArmor: UIItemsEntry;
    tomeOfKnowledge: UIItemsEntry;
    constructor(game: Game);
    show(): void;
}
declare class UILog {
    game: Game;
    oldInnerText: string;
    log: HTMLElement;
    constructor(game: Game);
    show(): void;
}
declare class UI {
    party: UIParty;
    equipment: UIEquipment;
    skills: UISkills;
    items: UIItems;
    town: UITown;
    shop: UIShop;
    log: UILog;
    constructor(game: Game);
    show(): void;
}
declare let ui: UI;
declare function initUI(game: Game): void;
