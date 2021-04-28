import { Condition } from './condition/condition';
export interface tableOptions {
    /**
     * 允许 UPDATE 时不设置 WHERE 条件。默认 false
     */
    updateWithoutWhere: boolean;
    /**
     * 允许 DELETE 时不设置 WHERE 条件。默认 false
     */
    deleteWithoutWhere: boolean;
}
interface updateData {
    [key: string]: any;
}
interface insertData {
    [key: string]: string | any[] | number;
}
export declare class Table {
    TableName: string;
    options: tableOptions;
    defaultTableOptions: tableOptions;
    constructor(name: string, options?: tableOptions);
    Select(...conditions: Condition[]): Promise<string>;
    Update(data: updateData | updateData[], ...conditions: Condition[]): Promise<void>;
    Insert(data: insertData | insertData[], ...conditions: Condition[]): Promise<void>;
    Delete(): Promise<void>;
    ToQuery(sqlTemplate: string, ...conditions: Condition[]): [string, any[]];
}
export {};
