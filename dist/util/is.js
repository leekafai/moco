"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.isInteger = exports.isType = void 0;
// const isObject = (obj: any) => {
//   return Object.prototype.toString.call(obj) === '[object Object]'
// }
const isInteger = (num) => {
    return Math.trunc(num) === num;
};
exports.isInteger = isInteger;
const getTypeString = (i) => {
    return Object.prototype.toString.call(i).slice(8, -1).toLowerCase();
};
const isObject = (obj) => {
    return isType(obj, 'object');
};
exports.isObject = isObject;
const isType = (item, type = 'undefined') => {
    const typeStr = getTypeString(type);
    if (typeStr === 'string') {
        console.log(getTypeString(item), typeStr);
        return getTypeString(item) === type;
    }
    else if (typeStr === 'function') {
        return item instanceof type;
    }
    else {
        return getTypeString(item) === typeStr;
    }
};
exports.isType = isType;
