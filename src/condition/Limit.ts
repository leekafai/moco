const Limit = (limit: number, offset?: number) => {
  if (Math.trunc(limit) !== limit || limit < 1) return
  let ofs = undefined
  if (offset && Math.trunc(offset) === offset) {
    ofs = offset
  }
  if (ofs) {
    return { LIMIT: { SQL: ` LIMIT ? OFFSET ?`, CON: [limit, ofs] } }
  }
  return { LIMIT: { SQL: ` LIMIT ?`, CON: [limit] } }
}
const Offset = (offset: number) => {
  if (Math.trunc(offset) !== offset || offset < 1) return
  return { OFFSET: offset }
}

export { Limit, Offset }