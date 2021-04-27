import { toQuery, renderCtx } from './util/sqlRender'
import { Condition } from './condition/condition'
import { renderContextItem } from './define'
export interface tableOptions {
  SQLTEMPLATE: string
}
interface updateData {
  [key: string]: any
}
interface insertData {
  [key: string]: string | any[] | number
}

export class Table {
  TableName: string
  _Columns: string | '*'
  options: tableOptions
  constructor(name: string, options?: tableOptions) {
    const trimName = name.trim()
    if (typeof name !== 'string' || !trimName.length) throw new Error('table name invalid')
    this.TableName = trimName
    this.options = options
  }
  async Select(
    ...conditions: Condition[]
  ) {
    const SQLTEMPLATE =
      `SELECT {{COLUMNS}} FROM {{TABLENAME}} {{WHERE}} {{ORDERBY}} {{LIMIT}} {{OFFSET}}`
    const renderCtxRes: {
      [key: string]: renderContextItem[]
    } = renderCtx(...conditions)
    console.log(renderCtxRes, 'renderCtxRes')
    const defaultCtx = {
      COLUMNS: {
        SQL: '*'
      },
      TABLENAME: {
        SQL: this.TableName
      }
    }
    const result = toQuery(SQLTEMPLATE, renderCtxRes, defaultCtx)
    console.log(result, 'result')
    return ''

  }
  async Update(data: updateData | updateData[], ...conditions: Condition[]) {
    console.log(data, conditions)
  }
  async Insert(data: insertData | insertData[], ...conditions: Condition[]) {
    console.log(data, conditions)
  }
  async Delete() {

  }
  ToQuery(sqlTemplate: string, ...conditions: Condition[]): [string, any[]] {
    if (typeof sqlTemplate !== 'string' || !sqlTemplate.length) return ['', []]
    console.log(conditions)
    const result = toQuery(sqlTemplate, renderCtx(...conditions))
    return result
  }
  // TODO JOIN LEFT/RIGHT
}