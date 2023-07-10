export interface Promocao {
    id: number
    destino: string
    imagem: string
    preco: number
}

export interface UnidadeFederativa {
    id: number;
    nome: string;
    sigla: string;
}

export interface Depoimento {
    id: number;
    texto: string;
    autor: string;
    avatar: string;
}

export interface Passagem {
  tipo:         string;
  precoIda:     number;
  precoVolta:   number;
  taxaEmbarque: number;
  conexoes:     number;
  tempoVoo:     number;
  origem:       UnidadeFederativa;
  destino:      UnidadeFederativa;
  companhia:    Companhia;
  dataIda:      Date;
  dataVolta:    Date;
}

export interface Companhia {
  id:   number;
  nome: string;
}

export interface Resultado {
  paginaAtual:  number;
  ultimaPagina: number;
  total:        number;
  resultado:    Passagem[];
}
