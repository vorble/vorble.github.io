declare type ItemNameType_StatBuff = 'potionStrUp1' | 'potionDexUp1' | 'potionConUp1' | 'potionIntUp1' | 'potionWisUp1' | 'potionChaUp1';
declare const ITEM_NAMES_STAT_BUFF: Array<ItemNameType_StatBuff>;
declare type ItemNameType_StatBoost = 'tomeStrUp' | 'tomeDexUp' | 'tomeConUp' | 'tomeIntUp' | 'tomeWisUp' | 'tomeChaUp';
declare const ITEM_NAMES_STAT_BOOST: Array<ItemNameType_StatBoost>;
declare type ItemNameType_Consumable = 'potionAntidote' | 'potionHealth' | 'clericRobes' | 'potionEnrage' | 'gobletBlood' | 'pocketAutomaton';
declare const ITEM_NAMES_CONSUMABLE: Array<ItemNameType_Consumable>;
declare type ItemNameType_EquipmentBoost = 'boostWeapon' | 'boostArmor';
declare const ITEM_NAMES_EQUIPMENT_BOOST: Array<ItemNameType_EquipmentBoost>;
declare type ItemNameType = ItemNameType_StatBuff | ItemNameType_StatBoost | ItemNameType_Consumable | ItemNameType_EquipmentBoost;
declare const ITEM_NAMES: Array<ItemNameType>;
interface Item {
    name: string;
    quantity: number;
    use: (game: Game) => void;
}
declare class ItemInventory {
    potionStrUp1: Item;
    potionDexUp1: Item;
    potionConUp1: Item;
    potionIntUp1: Item;
    potionWisUp1: Item;
    potionChaUp1: Item;
    tomeStrUp: Item;
    tomeDexUp: Item;
    tomeConUp: Item;
    tomeIntUp: Item;
    tomeWisUp: Item;
    tomeChaUp: Item;
    potionAntidote: Item;
    potionHealth: Item;
    clericRobes: Item;
    potionEnrage: Item;
    gobletBlood: Item;
    pocketAutomaton: Item;
    boostWeapon: Item;
    boostArmor: Item;
    constructor();
}
