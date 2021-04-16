interface configInterface {
    host: string;
    password: string;
    port?: string | number | 3306;
}
export declare function pool(config: configInterface): void;
export {};
