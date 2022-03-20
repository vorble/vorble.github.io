// Generates a pseudorandom integer k with a uniform distribution such that 0 <= k < n.
export function rollInt(n) {
    // I'm unsure of any practical limits on n, so any integer is assumed to allow a uniform
    // distribution of numbers in the range to be generated.
    if (!Number.isInteger(n) || n <= 0) {
        throw new Error('Expected positive integer.');
    }
    return Math.floor(rollRatio() * n);
}
// Generates a pseudorandom integer k with a uniform distribution such that low <= k <= high.
export function rollRange(low, high) {
    return rollInt(high - low + 1) + low;
}
// Generates a pseudorandom float k with a uniform distribution such that 0.0 <= k < 1.
export function rollRatio() {
    return Math.random();
}
// Generates a pseudorandom float k with a uniform distribution such that min <= k < max.
export function rollUniform(min, max) {
    return min + rollRatio() * (max - min);
}
