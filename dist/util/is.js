"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInteger = exports.isObject = void 0;
const isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
};
exports.isObject = isObject;
const isInteger = (num) => {
    return Math.trunc(num) === num;
};
exports.isInteger = isInteger;
