declare type EqFineCategory = 'blunt' | 'slice' | 'dark' | 'light' | 'fire' | 'ice';
declare const EQ_FINE_CATEGORIES: Array<EqFineCategory>;
declare type EqBroadCategory = 'physical' | 'magical' | 'elemental';
declare const EQ_BROAD_CATEGORIES: Array<EqBroadCategory>;
declare class EquipmentInventory {
    blunt: number;
    slice: number;
    dark: number;
    light: number;
    fire: number;
    ice: number;
    constructor();
}
declare class Equipment {
    physical: number;
    magical: number;
    elemental: number;
    constructor();
}
