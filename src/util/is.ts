// const isObject = (obj: any) => {
//   return Object.prototype.toString.call(obj) === '[object Object]'
// }
const isInteger = (num: number) => {
  return Math.trunc(num) === num
}
const getTypeString = (i?: any): string => {
  return Object.prototype.toString.call(i).slice(8, -1).toLowerCase()
}
const isObject = (obj: any) => {
  return isType(obj, 'object')
}

const isType = (item?: any, type: any | 'string' | 'number' | 'object' | 'array' | 'map' | 'set' | 'null' | 'undefined' = 'undefined') => {
  const typeStr = getTypeString(type)
  if (typeStr === 'string') {
    console.log(getTypeString(item), typeStr)
    return getTypeString(item) === type
  } else if (typeStr === 'function') {
    return item instanceof type
  } else {
    return getTypeString(item) === typeStr
  }
}
export { isType, isInteger, isObject }
