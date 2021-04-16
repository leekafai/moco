"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const sqlRender_1 = require("./util/sqlRender");
const condition_1 = require("./condition/condition");
class Table {
    constructor(name, options) {
        if (!name || typeof name !== 'string')
            throw new Error('table name invalid');
        this.TableName = name;
        this.options = options;
    }
    Select(...conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const SQLTEMPLATE = `SELECT {{COLUMNS}} FROM {{TABLENAME}} {{WHERE}} {{ORDERBY}} {{LIMIT}} {{OFFSET}}`;
            const len = conditions.length;
            const values = [];
            const sqlContext = {};
            sqlContext.TABLENAME = [`\`${this.TableName}\``];
            sqlContext.COLUMNS = ['*'];
            console.log(conditions, 'conditions');
            const sqlContextKeyAppendTimes = {};
            for (let i = 0; i < len; i++) {
                const Con = conditions[i];
                if ((Con === null || Con === void 0 ? void 0 : Con.constructor) !== condition_1.Condition)
                    continue;
                Con.keys.forEach((key) => {
                    const cdk = Con.data[key];
                    values.push(...((cdk === null || cdk === void 0 ? void 0 : cdk.CON) || []));
                    if (!sqlContext[key])
                        sqlContext[key] = [];
                    sqlContext[key].push((cdk === null || cdk === void 0 ? void 0 : cdk.SQL) || '');
                    sqlContextKeyAppendTimes[key] = (sqlContextKeyAppendTimes[key] || 0) + 1;
                    const jumpHead = sqlContext[key].length - sqlContextKeyAppendTimes[key];
                    if (jumpHead > 0) {
                        sqlContext[key] = sqlContext[key].slice(jumpHead);
                    }
                });
            }
            const sql = sqlRender_1.render(SQLTEMPLATE, sqlContext);
            console.log(values);
            return sql;
        });
    }
    Update() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    Insert() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    Delete() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.Table = Table;
