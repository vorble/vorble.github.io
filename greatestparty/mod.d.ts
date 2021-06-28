declare type ModTableEntry = [number, number];
declare type ModTable = Array<ModTableEntry>;
declare function mod(value: number, table: ModTable): number;
declare function modLinear(value: number, zero: number): number;
declare function modLinearStep(value: number, zero: number, step: number): number;
