interface whereCondition {
    eq?: {};
    ne?: {};
    gt?: {};
    gte?: {};
    lt?: {};
    lte?: {};
}
export declare function where(condition: whereCondition | whereCondition[]): void;
export {};
