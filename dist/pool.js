"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const mysql2 = require("mysql2/promise");
function pool(config) {
    if (!config)
        throw new Error('need config');
    mysql2;
}
exports.pool = pool;
