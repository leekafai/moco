const isObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
const isInteger = (num: number) => {
  return Math.trunc(num) === num
}
export { isObject, isInteger }
