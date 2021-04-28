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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlConn = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
class MysqlConn {
    constructor() {
        this.configMap = new Map();
        this.poolMap = new Map();
    }
    setPool(key, config) {
        promise_1.default.createPool;
        this.configMap.set(key, config);
        const pool = this.poolMap.get(key);
        if (pool) {
            pool.end();
        }
        const newPool = promise_1.default.createPool(config);
        this.poolMap.set(key, newPool);
        return newPool;
    }
    getPool(key) {
        return this.poolMap.get(key);
    }
    getConn(key, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const Config = config || this.configMap.get(key);
            if (!Config)
                throw new Error('getConn err: need config');
            const conn = promise_1.default.createConnection(Config);
            return conn;
        });
    }
}
exports.MysqlConn = MysqlConn;
