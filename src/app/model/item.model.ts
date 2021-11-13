import { Venda } from "./venda.model";

export interface Item{
  idVendaProduto?: number;
  venda: Venda;
  produto: string;
  precoVendaProduto: number;
  quantidade: number
}