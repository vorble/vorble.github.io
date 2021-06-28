declare function rollInt(n: number): number;
declare function rollRange(low: number, high: number): number;
declare function rollDie(sides: number): number;
declare function rollRatio(): number;
declare function rollBoolean(): boolean;
declare function rollChoice<T>(items: Array<T>): T;
interface RollChoiceWeighted {
    weight: number;
}
declare function rollChoiceWeighted<T extends RollChoiceWeighted>(items: Array<T>): T;
declare function rollShuffle<T>(list: Array<T>): void;
