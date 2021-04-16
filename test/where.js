const { Columns, Limit, OrderBy } = require('../dist/condition')

const callMore = (fn, options, ...args) => {
  const runTimes = options?.runTimes || 1e3
  const s = Date.now()
  for (let i = 0; i < runTimes; i++) {
    fn(...args)
  }
  const total = Date.now() - s
  console.log('total:', total, 'ms', 'avg:', total / runTimes, 'ms')
}

callMore(Columns, undefined, ['id', 'name', { age: 'year' }, 'vetur'])
console.log(Columns(['id', 'name', { age: 'year' }, 'vetur']))

callMore(Limit, undefined, 100)
console.log(Limit(100))

callMore(OrderBy, undefined, [{ id: 'ASC' }, { name: 'DESC' }])
console.log(OrderBy([{ id: 'ASC' }, { name: 'DESC' }]))
