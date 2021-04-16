export interface conditionStore {
  [keys: string]: {
    SQL: string,
    CON?: any[]
  }
}
class Condition {
  keys: string[]
  data: conditionStore
  constructor(data: conditionStore) {
    this.data = data
    this.keys = Object.keys(data)
  }
}

export { Condition }