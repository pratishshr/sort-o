declare module 'sort-o' {
  export type SortOrder = {
    ASC: string;
    DESC: string;
    LENGTH: string;
    LENGTH_REVERSE: string;
  };

  export function sort<T>(data: Array<T> | Object, sortOrder: SortOrder[keyof SortOrder] | Function): Array<T>;
  export function sortKeys(data: Object, sortOrder: SortOrder[keyof SortOrder] | Function): Object;
  export const sortOrder: SortOrder;
}
