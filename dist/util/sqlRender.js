"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const render = (template, context) => {
    if (!template || typeof template !== 'string' || !template.length)
        return '';
    return template.replace(/\{\{(.*?)\}\}/g, (_, key) => {
        var _a, _b;
        const k = key.trim();
        const v = ((_a = context[k]) === null || _a === void 0 ? void 0 : _a[0]) || '';
        context[k] = ((_b = context[k]) === null || _b === void 0 ? void 0 : _b.slice(1)) || [];
        return v;
    });
};
exports.render = render;
