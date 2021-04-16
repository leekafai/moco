interface whereCondition {
  eq?: {},
  ne?: {},
  gt?: {},
  gte?: {},
  lt?: {},
  lte?: {}
}
type Dict = { [k: string]: any };
type colCond = { s?: string, c?: any }
function $eq(eq: Dict) {
  if (!eq) return
  const columns = Object.keys(eq)
  const parsed = []
  for (let col of columns) {
    const varb = eq[col]
    if (varb === undefined) {
      continue
    }
    const cond: colCond = {}
    if (Array.isArray(varb)) {
      if (varb.length < 1) {
        continue
      } else if (varb.length === 1) {
        if (varb[0] === null) {
          cond.s = `${col} IS NULL `
        } else if (varb[0] !== undefined) {
          cond.s = `${col} =? `
          cond.c = [varb[0]]
        }
      } else {
        cond.s = `${col} IN ?`
        cond.c = [varb]
      }
    }
    parsed.push(cond)
  }
  return parsed
}
export function where(condition: whereCondition | whereCondition[]) {
  console.log(condition)
  if (!Array.isArray(condition)) {
    const eqParsed = $eq(condition.eq)
    console.log(eqParsed)
  }
}