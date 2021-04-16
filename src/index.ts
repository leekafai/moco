// interface tableInterface {
//   name: string
// }
// interface connectConfig{
//   host:string,
//   password:string,
//   port?:string|number|3306
// }
// export class Moco {
//   tableName: string | undefined = undefined
//   constructor() {
//   }
//   table(table: string | tableInterface) {
//     if (typeof table === 'string') {
//       this.tableName = table
//     }
//   }
// }
import { Table, tableOptions } from "./Table"
export { Table }
// const t = new Table('x')
// const { Select } = t
// export const table = (name: string, options: tableOptions) => {
//   return new TableCl(name, options)
// }
// export { Table: table }