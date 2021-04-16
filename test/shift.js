// const x=[0,1,2,3,4,5,6,7]
const times = 1e4
console.time('shift')
for (let i = 0; i < times; i++) {
  const x = new Array(10).fill(0)
  const y = x.shift()
}
console.timeEnd('shift')

console.time('pop')
for (let i = 0; i < times; i++) {
  const x = new Array(10).fill(0)
  const y = x.reverse().pop()
  x.reverse()
}

console.timeEnd('pop')
