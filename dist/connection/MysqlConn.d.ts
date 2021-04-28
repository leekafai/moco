/// <reference types="node" />
import mysql from 'mysql2/promise';
import { PoolOptions } from 'mysql2/typings/mysql/lib/Pool';
import { ConnectionOptions } from 'node:tls';
declare class MysqlConn {
    configMap: Map<any, any>;
    poolMap: {
        [key: string]: any;
    };
    constructor();
    setPool(key: string | symbol, config: PoolOptions): mysql.Pool;
    getPool(key: string | symbol): mysql.Pool;
    getConn(key: string | symbol, config?: ConnectionOptions): Promise<mysql.Connection>;
}
export { MysqlConn };
