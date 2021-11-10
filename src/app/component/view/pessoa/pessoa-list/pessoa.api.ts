import {Pessoa} from "../../../../model/pessoa.model";

export interface PessoaApi {
    content: Pessoa[];
    totalElements: number,
    totalPages: number,
    size: number,
    number: number,
    //sort: string,
    //order: SortDirection
}
