"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offset = exports.Limit = void 0;
const Limit = (limit, offset) => {
    if (Math.trunc(limit) !== limit || limit < 1)
        return;
    let ofs = undefined;
    if (offset && Math.trunc(offset) === offset) {
        ofs = offset;
    }
    if (ofs) {
        return { LIMIT: { SQL: ` LIMIT ? OFFSET ?`, CON: [limit, ofs] } };
    }
    return { LIMIT: { SQL: ` LIMIT ?`, CON: [limit] } };
};
exports.Limit = Limit;
const Offset = (offset) => {
    if (Math.trunc(offset) !== offset || offset < 1)
        return;
    return { OFFSET: offset };
};
exports.Offset = Offset;
