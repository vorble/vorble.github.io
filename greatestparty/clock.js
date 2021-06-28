"use strict";
var Season;
(function (Season) {
    Season[Season["Spring"] = 0] = "Spring";
    Season[Season["Summer"] = 1] = "Summer";
    Season[Season["Fall"] = 2] = "Fall";
    Season[Season["Winter"] = 3] = "Winter";
})(Season || (Season = {}));
// Keep non-numeric keys as a lookup table of Season names.
const SEASONS = Object.keys(Season).filter(x => !/^\d+$/.test(x));
var Sign;
(function (Sign) {
    Sign[Sign["Err"] = 0] = "Err";
    Sign[Sign["Goh"] = 1] = "Goh";
    Sign[Sign["Yurn"] = 2] = "Yurn";
    Sign[Sign["Joyn"] = 3] = "Joyn";
    Sign[Sign["Ryna"] = 4] = "Ryna";
    Sign[Sign["Sil"] = 5] = "Sil";
})(Sign || (Sign = {}));
// Keep non-numeric keys as a lookup table of Sign names.
const SIGNS = Object.keys(Sign).filter(x => !/^\d+$/.test(x));
const SIGNS_COUNT = SIGNS.length;
const TICKS_PER_TOCK = 20;
const TOCKS_PER_TERM = 20;
const TERMS_PER_SEASON = 25;
const SEASONS_PER_YEAR = SEASONS.length;
function clockInput(clock) {
    return unwrapClock({
        year: clock.year == null ? 0 : clock.year,
        season: clock.season == null ? 0 : clock.season,
        term: clock.term == null ? 0 : clock.term,
        tock: clock.tock == null ? 0 : clock.tock,
        tick: clock.tick == null ? 0 : clock.tick,
    });
}
function clockAdd(a, b) {
    return unwrapClock({
        year: a.year + b.year,
        season: a.season + b.season,
        term: a.term + b.term,
        tock: a.tock + b.tock,
        tick: a.tick + b.tick,
    });
}
function clockCompare(a, b) {
    if (a.year < b.year)
        return -1;
    else if (a.year > b.year)
        return 1;
    else if (a.season < b.season)
        return -1;
    else if (a.season > b.season)
        return 1;
    else if (a.term < b.term)
        return -1;
    else if (a.term > b.term)
        return 1;
    else if (a.tock < b.tock)
        return -1;
    else if (a.tock > b.tock)
        return 1;
    else if (a.tick < b.tick)
        return -1;
    else if (a.tick > b.tick)
        return 1;
    return 0;
}
function clockIsSeason(clock, season) {
    return clock.season == season;
}
function clockIsSpring(clock) {
    return clock.season == Season.Spring;
}
function clockIsSummer(clock) {
    return clock.season == Season.Summer;
}
function clockIsFall(clock) {
    return clock.season == Season.Fall;
}
function clockIsWinter(clock) {
    return clock.season == Season.Winter;
}
function clockToSign(clock) {
    return clock.year % SIGNS_COUNT;
}
function clockIsSign(clock, sign) {
    return sign == clockToSign(clock);
}
function unwrapClock(clock) {
    while (clock.tick >= TICKS_PER_TOCK) {
        clock.tick -= TICKS_PER_TOCK;
        clock.tock += 1;
        while (clock.tock >= TOCKS_PER_TERM) {
            clock.tock -= TOCKS_PER_TERM;
            clock.term += 1;
            while (clock.term >= TERMS_PER_SEASON) {
                clock.term -= TERMS_PER_SEASON;
                clock.season += 1;
                while (clock.season >= SEASONS_PER_YEAR) {
                    clock.season -= SEASONS_PER_YEAR;
                    clock.year += 1;
                }
            }
        }
    }
    return clock;
}
//# sourceMappingURL=clock.js.map