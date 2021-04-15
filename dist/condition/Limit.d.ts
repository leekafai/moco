declare const Limit: (limit: number, offset?: number) => {
    LIMIT: {
        SQL: string;
        CON: number[];
    };
};
declare const Offset: (offset: number) => {
    OFFSET: number;
};
export { Limit, Offset };
