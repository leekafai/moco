"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.where = void 0;
function $eq(eq) {
    if (!eq)
        return;
    const columns = Object.keys(eq);
    const parsed = [];
    for (let col of columns) {
        const varb = eq[col];
        if (varb === undefined) {
            continue;
        }
        const cond = {};
        if (Array.isArray(varb)) {
            if (varb.length < 1) {
                continue;
            }
            else if (varb.length === 1) {
                if (varb[0] === null) {
                    cond.s = `${col} IS NULL `;
                }
                else if (varb[0] !== undefined) {
                    cond.s = `${col} =? `;
                    cond.c = [varb[0]];
                }
            }
            else {
                cond.s = `${col} IN ?`;
                cond.c = [varb];
            }
        }
        parsed.push(cond);
    }
    return parsed;
}
function where(condition) {
    console.log(condition);
    if (!Array.isArray(condition)) {
        const eqParsed = $eq(condition.eq);
        console.log(eqParsed);
    }
}
exports.where = where;
