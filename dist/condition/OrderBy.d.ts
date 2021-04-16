import { Condition } from './condition';
interface orderByDire {
    [column: string]: 'ASC' | 'DESC' | true | false | 1 | 0;
}
declare const OrderBy: (orderBy: orderByDire | string | orderByDire[]) => Condition;
export { OrderBy };
