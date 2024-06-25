export interface Promocao{
    id: number;
    destino: string;
    imagem: string;
    preco: number;
}

export interface UnidadeFederativa{
    id: number;
    nome: string;
    sigla: string;
}

export interface Depoimento{
    autor:string;
    texto:string;
}