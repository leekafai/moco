declare const Columns: (cols: string | string[] | {
    [key: string]: string;
}, concat?: string) => {
    COLUMNS: {
        SQL: string;
    };
};
export { Columns };
