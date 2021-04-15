declare const Columns: (cols: string | {
    [key: string]: string;
} | string[], concat?: string) => {
    COLUMNS: {
        SQL: string;
    };
};
export { Columns };
