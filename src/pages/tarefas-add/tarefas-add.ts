import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {LovProvider} from "../../providers/lov/lov";
import {TarefaProvider} from "../../providers/tarefa/tarefa";
import {EstadoTarefa} from "../../models/estado-tarefa";


@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html',
})
export class TarefasAddPage {

  tarefa:Tarefa;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public lovProvider: LovProvider,
              public viewCtrl: ViewController,
              public tarefasProvider: TarefaProvider) {
    this.tarefa = this.navParams.get("tarefa");
    if(this.tarefa == undefined){
      this.tarefa = new Tarefa();
    }
  }

  ionViewDidLoad() {
    this.tarefa = this.navParams.get("tarefa");
    if(this.tarefa == undefined){
      this.tarefa = new Tarefa();
    }
  }

  getStateValue(estadoTarefa: EstadoTarefa){
    return EstadoTarefa[estadoTarefa];
  }

  salvarTarefa(){
    this.tarefasProvider.save(this.tarefa);
    this.viewCtrl.dismiss();
  }

}
