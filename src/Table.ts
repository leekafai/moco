import { render } from './util/sqlRender'
import { Condition } from './condition/condition'
export interface tableOptions {
  SQLTEMPLATE: string
}

export class Table {
  TableName: string
  _Columns: string | '*'
  options: tableOptions
  constructor(name: string, options?: tableOptions) {
    if (!name || typeof name !== 'string') throw new Error('table name invalid')
    this.TableName = name
    this.options = options
  }
  async Select(
    ...conditions: Condition[]
  ) {
    const SQLTEMPLATE =
      `SELECT {{COLUMNS}} FROM {{TABLENAME}} {{WHERE}} {{ORDERBY}} {{LIMIT}} {{OFFSET}}`
    const len = conditions.length
    // TODO values
    const values: any[] = []
    const sqlContext: { [key: string]: string[] } = {}
    sqlContext.TABLENAME = [`\`${this.TableName}\``]
    sqlContext.COLUMNS = ['*']
    console.log(conditions, 'conditions')
    const sqlContextKeyAppendTimes: { [key: string]: number } = {}
    for (let i = 0; i < len; i++) {
      const Con = conditions[i]
      if (Con?.constructor !== Condition) continue

      Con.keys.forEach((key) => {
        const cdk = Con.data[key]
        values.push(...(cdk?.CON || []))
        if (!sqlContext[key]) sqlContext[key] = []
        sqlContext[key].push(cdk?.SQL || '')
        sqlContextKeyAppendTimes[key] = (sqlContextKeyAppendTimes[key] || 0) + 1
        const jumpHead = sqlContext[key].length - sqlContextKeyAppendTimes[key]
        if (jumpHead > 0) {
          sqlContext[key] = sqlContext[key].slice(jumpHead)
        }
      })
    }
    const sql = render(SQLTEMPLATE, sqlContext)
    console.log(values)
    return sql
    // console.log(sql)

    // return this
  }
  async Update() {

  }
  async Insert() {

  }
  async Delete() {

  }
  // TODO JOIN LEFT/RIGHT
}