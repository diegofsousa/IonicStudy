import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {LovProvider} from "../../providers/lov/lov";


@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html',
})
export class TarefasAddPage {

  tarefa:Tarefa;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public lovProvider: LovProvider) {
    this.tarefa = this.navParams.get("tarefa");
    if(this.tarefa){
      this.tarefa = new Tarefa();
    }
  }

  ionViewDidLoad() {
    this.tarefa = this.navParams.get("tarefa");
    if(this.tarefa){
      this.tarefa = new Tarefa();
    }
  }

}
