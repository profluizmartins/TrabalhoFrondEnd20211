import {Pessoa} from "./pessoa.model";

export interface PessoaJuridica{
  idPessoaJuridica?: number;
  pessoa: Pessoa;
  cnpj: string;
  atividade: string;
}
