import { isInteger } from '../util/is'
const Limit = (limit: number, offset?: number) => {
  if (!isInteger(limit) || limit < 1) return
  let ofs = undefined
  if (offset && isInteger(offset)) {
    ofs = offset
  }
  if (ofs) {
    return { LIMIT: { SQL: ` LIMIT ? OFFSET ?`, CON: [limit, ofs] } }
  }
  return { LIMIT: { SQL: ` LIMIT ?`, CON: [limit] } }
}
const Offset = (offset: number) => {
  if (!isInteger(offset) || offset < 1) return
  return { OFFSET: offset }
}

export { Limit, Offset }