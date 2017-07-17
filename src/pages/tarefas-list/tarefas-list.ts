import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Tarefa} from "../../models/tarefa";
import {TarefaProvider} from "../../providers/tarefa/tarefa";
import {TarefasAddPage} from "../tarefas-add/tarefas-add";


/**
 * Generated class for the TarefasListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html',
})
export class TarefasListPage {

  tarefas:Array<Tarefa>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public tarefasProvider: TarefaProvider) {
  }

  ionViewDidLoad() {
    this.tarefas = this.tarefasProvider.getAll();
  }

  adicionarTarefa(){
    this.navCtrl.push(TarefasAddPage, {"tarefa": new Tarefa()})
  }

}
