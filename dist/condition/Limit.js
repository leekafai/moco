"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offset = exports.Limit = void 0;
const is_1 = require("../util/is");
const condition_1 = require("./condition");
const Limit = (limit, offset) => {
    let r = undefined;
    limit = +limit;
    if (!is_1.isInteger(limit) || limit < 1)
        return r;
    let ofs = undefined;
    if (offset && is_1.isInteger(offset)) {
        ofs = offset;
    }
    if (ofs) {
        r = { LIMIT: { SQL: ` LIMIT ? `, CON: [limit] }, OFFSET: { SQL: ` OFFSET ? `, CON: [ofs] } };
    }
    else {
        r = { LIMIT: { SQL: ` LIMIT ?`, CON: [limit] } };
    }
    return new condition_1.Condition(r);
};
exports.Limit = Limit;
const Offset = (offset) => {
    if (!is_1.isInteger(offset) || offset < 1)
        return;
    return new condition_1.Condition({ OFFSET: { SQL: ` OFFSET ? `, CON: [offset] } });
};
exports.Offset = Offset;
