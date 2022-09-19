export interface Kati {
  id: string;
  estilo: string;
  faixa: string;
  dificuldade: string;
}

export interface Execucao {
  id: string;
  katiId: string;
  quando: Date;
}

const kati: Kati = {
  id: '1',
  estilo: 'ton long',
  faixa: 'branca',
  dificuldade: 'facil',
};

const execucao: Execucao = {
  id: '1',
  katiId: '1',
  quando: new Date(),
}