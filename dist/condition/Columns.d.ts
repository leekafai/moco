import { Condition } from './condition';
/**
 * Columns options
 */
interface ColumnsOptions {
    /**
     * 在生成的SQL片段中拼接指定的字符串内容
     */
    concat?: string;
}
declare const Columns: (cols: string | string[] | {
    [key: string]: string;
}, options?: ColumnsOptions) => Condition;
export { Columns };
