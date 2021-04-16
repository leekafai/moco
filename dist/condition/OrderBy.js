"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBy = void 0;
const condition_1 = require("./condition");
const is_1 = require("../util/is");
const OrderBy = (orderBy) => {
    let _odby = undefined;
    if (Array.isArray(orderBy)) {
        const list = [];
        const l = orderBy.length;
        for (let i = 0; i < l; i++) {
            const y = orderBy[i];
            if (Array.isArray(y)) {
                continue;
            }
            if (typeof y === 'string') {
                list.push(y);
                continue;
            }
            if (is_1.isObject(y)) {
                const x = OrderBy(y);
                if (!x)
                    continue;
                const { ORDERBY } = x.data;
                list.push(ORDERBY.SQL);
            }
        }
        const SQL = list.filter((c) => c && c.length).join(',');
        if (SQL === null || SQL === void 0 ? void 0 : SQL.length) {
            _odby = SQL;
        }
    }
    else if (is_1.isObject(orderBy)) {
        const entries = Object.entries(orderBy);
        const c = entries.length;
        const newEnt = [];
        for (let i = 0; i < c; i++) {
            const c = entries[i];
            const [col, drt] = c;
            if (['DESC', 'ASC', true, false, 0, 1].includes(drt) &&
                typeof col === 'string' &&
                col.length) {
                const realDirt = typeof drt === 'string' ? drt : (drt ? 'ASC' : 'DESC');
                newEnt.push([col[0] === '`' ? col : `\`${col}\``, realDirt]);
            }
        }
        if (newEnt.length) {
            const sqlA = [];
            newEnt.forEach(([col, dirt]) => {
                sqlA.push(` ${col} ${dirt} `);
            });
            const SQL = sqlA.join(',');
            _odby = (SQL === null || SQL === void 0 ? void 0 : SQL.length) ? SQL : undefined;
        }
    }
    else if (typeof orderBy === 'string') {
        _odby = (orderBy === null || orderBy === void 0 ? void 0 : orderBy.length) ? orderBy : undefined;
    }
    return new condition_1.Condition({ ORDERBY: { SQL: `ORDER BY ${_odby}` } });
};
exports.OrderBy = OrderBy;
