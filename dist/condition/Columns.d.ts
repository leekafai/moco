import { Condition } from './condition';
declare const Columns: (cols: string | {
    [key: string]: string;
} | string[], concat?: string) => Condition;
export { Columns };
