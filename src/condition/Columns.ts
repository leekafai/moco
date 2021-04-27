import { Condition } from './condition'
import { isObject } from '../util/is'
const ObjParser = (cols: any) => {
  let _cols = undefined
  const keys = Object.entries(cols)
  if (keys.length) {
    _cols = keys
      .map(([k, v]) => {
        return typeof v === 'string' && v.length ? stringParser(k) + ' AS ' + stringParser(v) : undefined
      })
      .filter(c => !!c)
      .join(',')
  }
  if (_cols) return _cols
}
const stringParser = (cols: string) => {
  if (cols.indexOf(',') > -1 || cols.indexOf('.') > -1) {
    return cols
  }
  return cols[0] === '`' ? cols : `\`${cols}\``
}
/**
 * Columns options
 */
interface ColumnsOptions {
  /**
   * 在生成的SQL片段中拼接指定的字符串内容
   */
  concat?: string
}
const Columns = (cols: string[] | string | { [key: string]: string } | "*", options: ColumnsOptions = {}) => {
  let _cols: string = undefined

  if (Array.isArray(cols) && cols.length) {
    const spl: string[] = []
    const filtedCols = [...cols]
    const c = filtedCols.length
    for (let i = 0; i < c; i++) {
      const c = filtedCols[i]
      if (typeof c === 'string' && c.length) {
        spl.push(stringParser(c))
        continue
      }
      if (isObject(c)) {
        const x = ObjParser(c)
        x && spl.push(x)
      }
    }


    _cols = spl.length ? spl.join(',') : undefined

  } else if (typeof cols === 'object') {
    _cols = ObjParser(cols)
  } else if (typeof cols === 'string' && cols.length) {
    _cols = stringParser(cols)
  }
  if (!_cols) return
  const { concat } = options
  return new Condition({ COLUMNS: { SQL: (typeof concat === 'string' && concat.length) ? _cols + ',' + concat : _cols } })
}
export { Columns }