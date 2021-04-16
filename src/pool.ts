import * as mysql2 from 'mysql2/promise'
interface configInterface{
  host:string,
  password:string,
  port?:string|number|3306

}
export function pool(config:configInterface){
  if(!config) throw new Error('need config')
  mysql2
}