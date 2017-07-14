import {EstadoTarefa} from "./estado-tarefa";
/**
 * Created by diego on 14/07/17.
 */

export class Tarefa{
  codigo:number;
  titulo:string;
  desricao?:string;
  state:EstadoTarefa;
}
