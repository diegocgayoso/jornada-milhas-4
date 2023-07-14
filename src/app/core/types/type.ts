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
  somenteIda:           boolean;
  passageirosAdultos:   number;
  passageirosCriancas:  number;
  passageirosBebes:     number;
  tipo:                 string;
  origemId:             number;
  destinoId:            number;
  precoMin:             number;
  precoMax:             number;
  conexoes:             number;
  tempoVoo:             number;
  dataIda:              string;
  dataVolta:            string;
  companhiaId:          number;
  pagina:               number;
  porPagina:            number
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

// export interface PassagemDto{
//   tipo:	string;
//   precoIda:	number;
//   precoVolta:	number;
//   taxaEmbarque:	number;
//   conexoes:	number;
//   tempoVoo:	number;
//   origem:	UnidadeFederativa;
//   destino:	UnidadeFederativa;
//   companhia:	Companhia;
//   dataIda:	string;
//   dataVolta:	string;
//   }
