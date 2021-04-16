"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Columns = void 0;
const condition_1 = require("./condition");
const is_1 = require("../util/is");
const ObjParser = (cols) => {
    let _cols = undefined;
    const keys = Object.entries(cols);
    if (keys.length) {
        _cols = keys
            .map(([k, v]) => {
            return typeof v === 'string' && v.length ? stringParser(k) + ' AS ' + stringParser(v) : undefined;
        })
            .filter(c => !!c)
            .join(',');
    }
    if (_cols)
        return _cols;
};
const stringParser = (cols) => {
    if (cols.indexOf(',') > -1 || cols.indexOf('.') > -1) {
        return cols;
    }
    return cols[0] === '`' ? cols : `\`${cols}\``;
};
const Columns = (cols, concat) => {
    let _cols = undefined;
    if (Array.isArray(cols) && cols.length) {
        const spl = [];
        const filtedCols = [...cols];
        const c = filtedCols.length;
        for (let i = 0; i < c; i++) {
            const c = filtedCols[i];
            if (typeof c === 'string' && c.length) {
                spl.push(stringParser(c));
                continue;
            }
            if (is_1.isObject(c)) {
                const x = ObjParser(c);
                x && spl.push(x);
            }
        }
        _cols = spl.length ? spl.join(',') : undefined;
    }
    else if (typeof cols === 'object') {
        _cols = ObjParser(cols);
    }
    else if (typeof cols === 'string' && cols.length) {
        _cols = stringParser(cols);
    }
    if (!_cols)
        return;
    return new condition_1.Condition({ COLUMNS: { SQL: (typeof concat === 'string' && concat.length) ? concat + ',' + _cols : _cols } });
};
exports.Columns = Columns;
