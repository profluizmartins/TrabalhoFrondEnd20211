export interface Pagamento {
  id: string;
  nome: string;
  nomeDoProduto: string;
  quantidade: number;
  total: number;
  valor: number;
  status: 'aprovado' | 'pendente';
}
