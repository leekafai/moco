const render = (template: string, context: { [key: string]: any }) => {
  if (!template || typeof template !== 'string' || !template.length) return ''
  return template.replace(/\{\{(.*?)\}\}/g, (_, key) => {
    const k = key.trim()
    const v = context[k]?.[0] || ''
    context[k] = context[k]?.slice(1) || []
    return v
  });
}
export { render }