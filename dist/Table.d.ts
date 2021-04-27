import { Condition } from './condition/condition';
export interface tableOptions {
    SQLTEMPLATE: string;
}
interface updateData {
    [key: string]: any;
}
interface insertData {
    [key: string]: string | any[] | number;
}
export declare class Table {
    TableName: string;
    _Columns: string | '*';
    options: tableOptions;
    constructor(name: string, options?: tableOptions);
    Select(...conditions: Condition[]): Promise<string>;
    Update(data: updateData | updateData[], ...conditions: Condition[]): Promise<void>;
    Insert(data: insertData | insertData[], ...conditions: Condition[]): Promise<void>;
    Delete(): Promise<void>;
    ToQuery(sqlTemplate: string, ...conditions: Condition[]): [string, any[]];
}
export {};
