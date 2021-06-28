declare type ItemNameType_Potion = 'potionStrUp1' | 'potionDexUp1' | 'potionConUp1' | 'potionIntUp1' | 'potionWisUp1' | 'potionChaUp1' | 'potionAntidote' | 'potionHealth';
declare const ITEM_NAMES_POTION: Array<ItemNameType_Potion>;
declare type ItemNameType_Consumable = 'clericRobes';
declare const ITEM_NAMES_CONSUMABLE: Array<ItemNameType_Consumable>;
declare type ItemNameType_Boost = 'boostWeapon' | 'boostArmor' | 'tomeOfKnowledge';
declare const ITEM_NAMES_BOOST: Array<ItemNameType_Boost>;
declare type ItemNameType = ItemNameType_Potion | ItemNameType_Consumable | ItemNameType_Boost;
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
    potionAntidote: Item;
    potionHealth: Item;
    clericRobes: Item;
    boostWeapon: Item;
    boostArmor: Item;
    tomeOfKnowledge: Item;
    constructor();
}
