import mysql from 'mysql2/promise'
import { PoolOptions } from 'mysql2/typings/mysql/lib/Pool'
import { ConnectionOptions } from 'node:tls'


class MysqlConn {
  configMap = new Map()
  poolMap: { [key: string]: any } = new Map()
  constructor() {

  }
  setPool(key: string | symbol, config: PoolOptions): mysql.Pool {
    mysql.createPool
    this.configMap.set(key, config)
    const pool: mysql.Pool = this.poolMap.get(key)
    if (pool) {
      pool.end()
    }
    const newPool: mysql.Pool = mysql.createPool(config)
    this.poolMap.set(key, newPool)
    return newPool
  }
  getPool(key: string | symbol): mysql.Pool {
    return this.poolMap.get(key)
  }
  async getConn(key: string | symbol, config?: ConnectionOptions): Promise<mysql.Connection> {
    const Config = config || this.configMap.get(key)
    if (!Config) throw new Error('getConn err: need config')
    const conn = mysql.createConnection(Config)
    return conn
  }
}
export { MysqlConn }