export interface conditionStore {
    [keys: string]: {
        SQL: string;
        CON?: any[];
    };
}
declare class Condition {
    keys: string[];
    data: conditionStore;
    constructor(data: conditionStore);
}
export { Condition };
