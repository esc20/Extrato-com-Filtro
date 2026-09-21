
export type TipoTransacao = 'ENTRADA' | 'SAIDA';
export type CategoriaTransacao = 'PIX' | 'CARTAO' | 'BOLETO' | 'TRANSFERENCIA';

export interface Transacao {
  id: string;
  data: string;      
  descricao: string;
  valor: number;
  categoria: CategoriaTransacao;
  tipo: TipoTransacao;
  icone: string; 
}
