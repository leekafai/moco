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
class Table {
    constructor(name, options) {
        const trimName = name.trim();
        if (typeof name !== 'string' || !trimName.length)
            throw new Error('table name invalid');
        this.TableName = trimName;
        this.options = options;
    }
    Select(...conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            const SQLTEMPLATE = `SELECT {{COLUMNS}} FROM {{TABLENAME}} {{WHERE}} {{ORDERBY}} {{LIMIT}} {{OFFSET}}`;
            const renderCtxRes = sqlRender_1.renderCtx(...conditions);
            console.log(renderCtxRes, 'renderCtxRes');
            const defaultCtx = {
                COLUMNS: {
                    SQL: '*'
                },
                TABLENAME: {
                    SQL: this.TableName
                }
            };
            const result = sqlRender_1.toQuery(SQLTEMPLATE, renderCtxRes, defaultCtx);
            console.log(result, 'result');
            return '';
        });
    }
    Update(data, ...conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data, conditions);
        });
    }
    Insert(data, ...conditions) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data, conditions);
        });
    }
    Delete() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    ToQuery(sqlTemplate, ...conditions) {
        if (typeof sqlTemplate !== 'string' || !sqlTemplate.length)
            return ['', []];
        console.log(conditions);
        const result = sqlRender_1.toQuery(sqlTemplate, sqlRender_1.renderCtx(...conditions));
        return result;
    }
}
exports.Table = Table;
