"use strict";
// Generates a pseudorandom integer k with a uniform distribution such that 0 <= k < n.
function rollInt(n) {
    // I'm unsure of any practical limits on n, so any integer is assumed to allow a uniform
    // distribution of numbers in the range to be generated.
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error('Expected positive integer.');
    }
    return Math.floor(rollRatio() * n);
}
// Generates a pseudorandom integer k with a uniform distribution such that low <= k <= high.
function rollRange(low, high) {
    return rollInt(high - low + 1) + low;
}
// Generates a pseudorandom integer k with a uniform distribution such that 1 <= k <= n.
// Emulates a roll of a die.
function rollDie(sides) {
    return rollInt(sides) + 1;
}
// Generates a pseudorandom float k with a uniform distribution such that 0.0 <= k < 1.0.
function rollRatio() {
    return Math.random();
}
// Generates a pseudorandom boolean value with a uniform distribution.
// Emulates flipping a coin.
function rollBoolean() {
    return rollRatio() < 0.5;
}
// Chooses one item from the given array of items with equal probability.
function rollChoice(items) {
    const index = rollInt(items.length);
    return items[index];
}
function rollChoiceWeighted(items) {
    let total = 0;
    for (const item of items) {
        if (!Number.isInteger(item.weight) || item.weight <= 0) {
            throw new Error('Invalid weight.');
        }
        total += item.weight;
    }
    let which = rollInt(total);
    for (const item of items) {
        if (which < item.weight) {
            return item;
        }
        which -= item.weight;
    }
    throw new Error('Assertion error.');
}
// Shuffles the list.
function rollShuffle(list) {
    let j = list.length - 1;
    while (j > 1) {
        const i = rollInt(j);
        const t = list[j];
        list[j] = list[i];
        list[i] = t;
        --j;
    }
}
//# sourceMappingURL=roll.js.map