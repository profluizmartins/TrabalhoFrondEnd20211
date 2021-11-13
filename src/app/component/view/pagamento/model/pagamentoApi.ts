import { Pagamento } from "./pagamento";

export interface PagamentoApi {
  content: Pagamento[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
