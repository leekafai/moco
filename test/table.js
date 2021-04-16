const { Table } = require('../dist/index')
const { Columns, OrderBy, Limit, Offset } = require('../dist/condition')
const user = new Table('user', {})
const run = async () => {
  const times = 1
  const s = Date.now()
  for (let i = 0; i < times; i++) {

    const x = await user.Select(
      Columns(['id', 'nick', { f: 'df' }]),
      OrderBy({ id: 1 }),
      Limit(100, 20),
      Offset(12)
    )

    if (i === times - 1) {
      console.log(x)
    }
  }
  const n = Date.now() - s
  console.log(n, 'avg', n / times)
  const v = await user.Select(
    Columns(['id', 'nick', { f: 'df' }]),
    OrderBy({ id: 1 }),
    Limit('x'),
    Offset(12)
  )
  console.log(v)
}
run()