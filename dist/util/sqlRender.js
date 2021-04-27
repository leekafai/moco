"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCtx = exports.toQuery = void 0;
const condition_1 = require("../condition/condition");
const toQuery = (template, context, defaultCtx) => {
    // TODO values
    if (!template || typeof template !== 'string' || !template.length)
        return ['', []];
    // const condition = []
    const placeHolderPoint = new Map();
    console.log(context, 'context');
    const values = [];
    const sql = template.replace(/\{\{(.*?)\}\}/g, (_, key) => {
        console.log(_, key);
        const keyCtxList = context[key.trim()] || [defaultCtx[key]];
        console.log(keyCtxList, 'keyCtxList');
        if (!keyCtxList || !keyCtxList.length) {
            return '';
        }
        const ctxIndex = placeHolderPoint.get(key) || 0;
        const selectFromCtx = keyCtxList[ctxIndex];
        placeHolderPoint.set(key, ctxIndex + 1);
        if (!selectFromCtx)
            return '';
        const { SQL = '', CON = [] } = selectFromCtx;
        values.push(...CON);
        return SQL;
    });
    console.log(sql, values);
    return [sql.trim(), values];
};
exports.toQuery = toQuery;
const renderCtx = (...conditions) => {
    const filteredConditions = conditions.filter(c => c.constructor === condition_1.Condition);
    const len = filteredConditions.length;
    const ctx = {};
    for (let i = 0; i < len; i++) {
        const condition = filteredConditions[i];
        const { data, keys } = condition;
        keys.forEach((keyName) => {
            if (!ctx[keyName]) {
                ctx[keyName] = [];
            }
            ctx[keyName].push(data[keyName]);
        });
    }
    return ctx;
};
exports.renderCtx = renderCtx;
