export type PaginationType = {
  itemsPerPage: number;
  currentPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
};
