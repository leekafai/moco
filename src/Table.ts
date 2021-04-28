import { toQuery, renderCtx } from './util/sqlRender'
import { Condition } from './condition/condition'
import { renderContextItem } from './define'
export interface tableOptions {
  /**
   * 允许 UPDATE 时不设置 WHERE 条件。默认 false
   */
  updateWithoutWhere: boolean,
  /**
   * 允许 DELETE 时不设置 WHERE 条件。默认 false
   */
  deleteWithoutWhere: boolean
}
interface updateData {
  [key: string]: any
}
interface insertData {
  [key: string]: string | any[] | number
}

export class Table {
  TableName: string
  options: tableOptions
  defaultTableOptions: tableOptions = {
    updateWithoutWhere: false,
    deleteWithoutWhere: false
  }
  constructor(name: string, options?: tableOptions) {
    const trimName = name.trim()
    if (typeof name !== 'string' || !trimName.length) throw new Error('table name invalid')
    this.TableName = trimName
    this.options = Object.assign({}, this.defaultTableOptions, (options || {}))
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