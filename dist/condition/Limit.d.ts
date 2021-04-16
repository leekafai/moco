import { Condition } from './condition';
declare const Limit: (limit: number, offset?: number) => Condition;
declare const Offset: (offset: number) => Condition;
export { Limit, Offset };
