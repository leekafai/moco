import { isInteger } from '../util/is'
import { Condition } from './condition'
const Limit = (limit: number, offset?: number) => {
  let r = undefined
  limit = +limit
  if (!isInteger(limit) || limit < 1) return r

  let ofs = undefined
  if (offset && isInteger(offset)) {
    ofs = offset
  }

  if (ofs) {
    r = { LIMIT: { SQL: ` LIMIT ? `, CON: [limit] }, OFFSET: { SQL: ` OFFSET ? `, CON: [ofs] } }
  } else {
    r = { LIMIT: { SQL: ` LIMIT ?`, CON: [limit] } }
  }
  return new Condition(r)
}
const Offset = (offset: number) => {
  if (!isInteger(offset) || offset < 1) return
  return new Condition({ OFFSET: { SQL: ` OFFSET ? `, CON: [offset] } })
}

export { Limit, Offset }