declare type StatusType = 'berzerk' | 'islandCurse' | 'angeredGods' | 'poison' | 'bleeding' | 'outOfTown';
declare const STATUSES: Array<StatusType>;
interface StatusItemCore extends ClockActions {
    active: boolean;
    year: number;
    season: number;
    term: number;
    tock: number;
    tick: number;
    name: string;
}
interface StatusItem extends Clock {
    name: string;
    strmod: number;
    dexmod: number;
    conmod: number;
    intmod: number;
    wismod: number;
    chamod: number;
    preventAttack: boolean;
    preventHeal: boolean;
    damagePerTick: number;
    damagePerTock: number;
}
interface StatusItemInput extends ClockInput {
    name: string;
    strmod?: number;
    dexmod?: number;
    conmod?: number;
    intmod?: number;
    wismod?: number;
    chamod?: number;
    preventAttack?: boolean;
    preventHeal?: boolean;
    damagePerTick?: number;
    damagePerTock?: number;
}
declare function statusItemInput(status: StatusItemInput): {
    strmod: number;
    dexmod: number;
    conmod: number;
    intmod: number;
    wismod: number;
    chamod: number;
    preventAttack: boolean;
    preventHeal: boolean;
    damagePerTick: number;
    damagePerTock: number;
    year: number;
    season: number;
    term: number;
    tock: number;
    tick: number;
    name: string;
};
declare function statusIsExpired(game: Game, status: StatusItemCore): boolean;
declare function statusSetExpiry(game: Game, status: Clock, length: ClockInput): void;
declare class Status {
    berzerk: StatusItemCore;
    islandCurse: StatusItemCore;
    angeredGods: StatusItemCore;
    poison: StatusItemCore;
    bleeding: StatusItemCore;
    outOfTown: StatusItemCore;
    other: Array<StatusItem>;
    constructor();
    doTickActions(game: Game): void;
    hasPreventAttack(): boolean;
    addStatus(game: Game, status: StatusItemInput): void;
    _applyStatus(game: Game, status: StatusItem): void;
    _unapplyStatus(game: Game, status: StatusItem): void;
}
