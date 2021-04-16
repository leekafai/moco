import { Condition } from './condition/condition';
export interface tableOptions {
    SQLTEMPLATE: string;
}
export declare class Table {
    TableName: string;
    _Columns: string | '*';
    options: tableOptions;
    constructor(name: string, options?: tableOptions);
    Select(...conditions: Condition[]): Promise<string>;
    Update(): Promise<void>;
    Insert(): Promise<void>;
    Delete(): Promise<void>;
}
