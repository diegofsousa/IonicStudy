import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Tarefa} from "../../models/tarefa";
import {LoginProvider} from "../login/login";
import firebase from "firebase";

/*
  Generated class for the TarefaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class TarefaProvider {

  reference;

  constructor(public http: Http,
              public loginProvider: LoginProvider) {
    this.initialize();
  }

  save(tarefa: Tarefa){
    let refKey;
    if(tarefa.codigo != undefined){
      refKey = tarefa.codigo;
    }else{
      refKey = this.reference.push().key;
      tarefa.codigo = refKey;
    }
    this.reference.child(refKey).update(tarefa);
  }

  deletar(tarefa: Tarefa):any{
    return this.reference.child(tarefa.codigo).remove();
  }

  private initialize(){
    this.reference = firebase.database().ref(this.loginProvider.currentUser.uid+'/tarefas/');
  }

  adicionar(tarefa:Tarefa){

  }

}
