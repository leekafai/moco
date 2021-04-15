"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offset = exports.Limit = void 0;
const is_1 = require("../util/is");
const Limit = (limit, offset) => {
    if (!is_1.isInteger(limit) || limit < 1)
        return;
    let ofs = undefined;
    if (offset && is_1.isInteger(offset)) {
        ofs = offset;
    }
    if (ofs) {
        return { LIMIT: { SQL: ` LIMIT ? OFFSET ?`, CON: [limit, ofs] } };
    }
    return { LIMIT: { SQL: ` LIMIT ?`, CON: [limit] } };
};
exports.Limit = Limit;
const Offset = (offset) => {
    if (!is_1.isInteger(offset) || offset < 1)
        return;
    return { OFFSET: offset };
};
exports.Offset = Offset;
