const a = `SELECT {{COLUMNS}} FROM {{TABLENAME}} {{WHERE}} {{ORDERBY}} {{LIMIT}} {{OFFSET}}`
console.log(a.replace(/{{([\S]{1,})}}/g, '${$1}'))

const render = (template, context) => {
  return template.replace(/\{\{(.*?)\}\}/g, (match, key) => (context[key.trim()] || ''));
}

const r = render(a, { COLUMNS: '*', TABLENAME: 'user' })
console.log(r)