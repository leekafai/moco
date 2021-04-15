"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderBy = void 0;
const OrderBy = (orderBy) => {
    console.log(orderBy);
    let _oby = undefined;
    if (Array.isArray(orderBy)) {
        const list = [];
        const l = orderBy.length;
        for (let i = 0; i < l; i++) {
            const x = OrderBy(orderBy[i]);
            if (!x)
                continue;
            const { ORDERBY } = x;
            list.push(ORDERBY.SQL);
        }
        const SQL = list.filter((c) => c && c.length).join(',');
        return { ORDERBY: { SQL } };
    }
    else if (typeof orderBy === 'object') {
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
            return { ORDERBY: { SQL: sqlA.join(',') } };
        }
    }
    else if (typeof orderBy === 'string') {
        return { ORDERBY: { SQL: orderBy } };
    }
    if (!_oby)
        return;
};
exports.OrderBy = OrderBy;
