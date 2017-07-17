import {EstadoTarefa} from "./estado-tarefa";
/**
 * Created by diego on 14/07/17.
 */

export class Tarefa{
  codigo:number;
  titulo:string;
  descricao:string;
  state:EstadoTarefa;

  constructor(codigo?: number, titulo?:string, descricao?:string){
    this.codigo = codigo;
    this.titulo = titulo;
    this.descricao = descricao;
    this.state = EstadoTarefa.NOVA;
  }
}


