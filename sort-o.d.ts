declare module 'sort-o' {
  export type SortOrder = {
    ASC: string;
    DESC: string;
    LENGTH: string;
    LENGTH_REVERSE: string;
  };

  export function sort(data: Array<T> | object, sortOrder: SortOrder[keyof SortOrder] | Function): Array<T> | object;
  export const sortOrder: SortOrder;
}
