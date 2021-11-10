import {PessoaJuridica} from "../../../../model/pessoaJuridica.model";

export interface PessoaJuridicaApi {
    content: PessoaJuridica[];
    totalElements: number,
    totalPages: number,
    size: number,
    number: number,
    //sort: string,
    //order: SortDirection
}
