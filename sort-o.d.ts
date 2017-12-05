declare module 'sort-o' {
  export type SortOrder = {
    ASC: string;
    DESC: string;
    ASC_LENGTH: string;
    DESC_LENGTH: string;
  };

  export function sort<T>(data: Array<T> | Object, sortOrder: SortOrder[keyof SortOrder] | Function): Array<T>;
  export function sortKeys(data: Object, sortOrder: SortOrder[keyof SortOrder] | Function): Object;
  export const sortOrder: SortOrder;
}
