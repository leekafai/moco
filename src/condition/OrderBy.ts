import { Condition } from './condition'
import { isObject } from '../util/is'

interface orderByDire { [column: string]: 'ASC' | 'DESC' | true | false | 1 | 0 }

const OrderBy = (orderBy: orderByDire | string | orderByDire[]) => {
  let _odby: string = undefined
  if (Array.isArray(orderBy)) {
    const list = []
    const l = orderBy.length
    for (let i = 0; i < l; i++) {
      const y = orderBy[i]
      if (Array.isArray(y)) {
        continue
      }
      if (typeof y === 'string') {
        list.push(y)
        continue
      }
      if (isObject(y)) {
        const x = OrderBy(y)
        if (!x) continue
        const { ORDERBY } = x.data
        list.push(ORDERBY.SQL)
      }
    }
    const SQL: string = list.filter((c) => c && c.length).join(',')
    if (SQL?.length) {
      _odby = SQL
    }
  } else if (isObject(orderBy)) {
    const entries = Object.entries(orderBy)
    const c = entries.length
    const newEnt = []
    for (let i = 0; i < c; i++) {
      const c = entries[i]
      const [col, drt] = c
      if (
        ['DESC', 'ASC', true, false, 0, 1].includes(drt) &&
        typeof col === 'string' &&
        col.length
      ) {
        const realDirt = typeof drt === 'string' ? drt : (drt ? 'ASC' : 'DESC')
        newEnt.push([col[0] === '`' ? col : `\`${col}\``, realDirt])
      }
    }
    if (newEnt.length) {
      const sqlA: string[] = []
      newEnt.forEach(([col, dirt]) => {
        sqlA.push(` ${col} ${dirt} `)
      })
      const SQL = sqlA.join(',')
      _odby = SQL?.length ? SQL : undefined
    }
  } else if (typeof orderBy === 'string') {
    _odby = orderBy?.length ? orderBy : undefined

  }
  return new Condition({ ORDERBY: { SQL: `ORDER BY ${_odby}` } })
}
export { OrderBy }