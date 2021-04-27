SQL helper
---

- [] 生成简易 SQL
- [] 多配置管理


### Ex
```javascript

const userTable=new Table('user')
await userTable.Select() // SELECT * FROM user;
await userTable.Select(Columns({id:'u_id'}),Limit(10)) // SELECT id AS u_id FROM user LIMIT 10;
```