import { ProdutoEstoque } from "./produtoEstoque.model";

export interface produtoEstoquePage {
    content: ProdutoEstoque[];
    totalElements: number,
    totalPages: number,
    size: number,
    number: number,
    // sort: string,
    // order: SortDirection
}