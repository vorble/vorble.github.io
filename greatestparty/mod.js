"use strict";
function mod(value, table) {
    if (table.length == 0) {
        throw new Error('Invalid mod table.');
    }
    let result = table[0][1];
    for (let i = 1; i < table.length; ++i) {
        const [threshold, modifier] = table[i];
        if (value < threshold) {
            break;
        }
        result = modifier;
    }
    return result;
}
// Calculate a linear modifier. Modifier is calculated to be 0 when value
// is equal to that provided for zero. Every two points of value gives one
// point of modifier.
function modLinear(value, zero) {
    return Math.floor((value - zero) / 2);
}
// Calculate a linear modifier. Modifier is calculated to be 0 when value
// is equal to that provided for zero. Every "step" points of value gives one
// point of modifier.
function modLinearStep(value, zero, step) {
    return Math.floor((value - zero) / step);
}
//# sourceMappingURL=mod.js.map