declare const isInteger: (num: number) => boolean;
declare const isObject: (obj: any) => boolean;
declare const isType: (item?: any, type?: any | 'string' | 'number' | 'object' | 'array' | 'map' | 'set' | 'null' | 'undefined') => boolean;
export { isType, isInteger, isObject };
