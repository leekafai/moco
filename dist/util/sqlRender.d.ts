import { renderContextItem } from '../define';
import { Condition } from '../condition/condition';
declare const toQuery: (template: string, context: {
    [placeHolder: string]: renderContextItem[];
}, defaultCtx?: {
    [placeHolder: string]: renderContextItem;
}) => [string, any[]];
declare const renderCtx: (...conditions: Condition[]) => {
    [key: string]: renderContextItem[];
};
export { toQuery, renderCtx };
