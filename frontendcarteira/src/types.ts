export interface Usuario {
    id: number;
    nome:string;
    matricula: string;
    cpf: string;
    data_nascimento: string;
    semestre: number;
    foto: string; // Adiciona a URL da foto
  }

export interface Semestre {
    usuario: number;
    semestre: number;
    dia_semana: string;
    cadeira: string;
  }
  
  