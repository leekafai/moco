import { renderContextItem } from '../define'
import { Condition } from '../condition/condition'
const toQuery = (template: string, context: { [placeHolder: string]: renderContextItem[] }, defaultCtx?: { [placeHolder: string]: renderContextItem }): [string, any[]] => {
  // TODO values
  if (!template || typeof template !== 'string' || !template.length) return ['', []]
  // const condition = []
  const placeHolderPoint = new Map()
  console.log(context, 'context')
  const values: any[] = []
  const sql = template.replace(/\{\{(.*?)\}\}/g, (_, key) => {
    console.log(_, key)
    const keyCtxList = context[key.trim()] || [defaultCtx[key]]
    console.log(keyCtxList, 'keyCtxList')

    if (!keyCtxList || !keyCtxList.length) {
      return ''
    }
    const ctxIndex = placeHolderPoint.get(key) || 0
    const selectFromCtx = keyCtxList[ctxIndex]
    placeHolderPoint.set(key, ctxIndex + 1)
    if (!selectFromCtx) return ''
    const { SQL = '', CON = [] } = selectFromCtx
    values.push(...CON)
    return SQL
  });
  console.log(sql, values)
  return [sql.trim(), values]
}
const renderCtx = (...conditions: Condition[]) => {
  const filteredConditions = conditions.filter(c => c.constructor === Condition)
  const len = filteredConditions.length
  const ctx: {
    [key: string]: renderContextItem[]
  } = {}
  for (let i = 0; i < len; i++) {
    const condition = filteredConditions[i]
    const { data, keys } = condition

    keys.forEach((keyName) => {
      if (!ctx[keyName]) {
        ctx[keyName] = []
      }
      ctx[keyName].push(data[keyName])
    })
  }
  return ctx
}
export { toQuery, renderCtx }