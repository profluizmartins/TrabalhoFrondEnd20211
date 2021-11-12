import { Pessoa } from "./pessoa.model";

export interface Venda{
  idVenda?: number;
  comprador: Pessoa;
  dataVenda: Date;
  tipoPagamento: string;
  qtdPrestacao: number;
  concluido: boolean
}