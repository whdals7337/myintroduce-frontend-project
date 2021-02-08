export type Header<T> = {
    status: string; //api 응답코드
    msg: string;
    data: T;
    pagination: Pagination;
}

export type Pagination = {
    totalPages: number;
    totalElements: number;
    currentPage: number;
    currentElements: number;
}