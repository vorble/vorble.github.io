declare enum Season {
    Spring = 0,
    Summer = 1,
    Fall = 2,
    Winter = 3
}
declare const SEASONS: Array<string>;
declare enum Sign {
    Err = 0,
    Goh = 1,
    Yurn = 2,
    Joyn = 3,
    Ryna = 4,
    Sil = 5
}
declare const SIGNS: Array<string>;
declare const SIGNS_COUNT: number;
declare const TICKS_PER_TOCK = 20;
declare const TOCKS_PER_TERM = 20;
declare const TERMS_PER_SEASON = 25;
declare const SEASONS_PER_YEAR: number;
declare const TOCKS_PER_SEMITERM = 5;
interface Clock {
    year: number;
    season: number;
    term: number;
    tock: number;
    tick: number;
}
interface ClockInput {
    year?: number;
    season?: number;
    term?: number;
    tock?: number;
    tick?: number;
}
declare function clockInput(clock: ClockInput): Clock;
declare function clockAdd(a: Clock, b: Clock): Clock;
declare function clockCompare(a: Clock, b: Clock): -1 | 0 | 1;
declare function clockIsSeason(clock: Clock, season: Season): boolean;
declare function clockIsSpring(clock: Clock): boolean;
declare function clockIsSummer(clock: Clock): boolean;
declare function clockIsFall(clock: Clock): boolean;
declare function clockIsWinter(clock: Clock): boolean;
declare function clockToSign(clock: Clock): Sign;
declare function clockIsSign(clock: Clock, sign: Sign): boolean;
interface ClockActions {
    doTickActions?: (game: Game) => void;
    doTockActions?: (game: Game) => void;
    doTermActions?: (game: Game) => void;
    doSeasonActions?: (game: Game) => void;
    doYearActions?: (game: Game) => void;
}
declare function clockUnwrap(clock: Clock): Clock;
