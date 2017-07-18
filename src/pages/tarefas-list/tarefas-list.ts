import {Component, NgZone} from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
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
              public tarefasProvider: TarefaProvider,
              public toastCtrl: ToastController,
              public ngZone: NgZone) {
    this.tarefas = new Array<Tarefa>();

  }

  ionViewDidLoad() {
    this.tarefasProvider.reference.on('child_removed', (snapshot) => {
      let tarefaRemovida = snapshot.val();
      this.toastCtrl.create({
        message: "Tarefa " + tarefaRemovida.titulo + " removida.",
        duration: 3000
      }).present();
    });

    this.tarefasProvider.reference.on('value', (snapshot) =>{
      this.ngZone.run( ()=>{
        let innerArray = new Array();
        snapshot.forEach(elemento =>{
          let e1= elemento.val();
          innerArray.push(e1);
        })
        this.tarefas = innerArray;
      })
    })
  }

  adicionarTarefa(){
    this.navCtrl.push(TarefasAddPage, {"tarefa": new Tarefa()})
  }

  atualizarTarefa(tarefa:Tarefa){
    this.navCtrl.push(TarefasAddPage, {"tarefa": tarefa})
  }

  deletarTarefa(tarefa:Tarefa){
    this.tarefasProvider.deletar(tarefa)
      .then(sucesso => console.log("tarefa deletada"))
      .catch(error => console.log("não foi possível deletar a tarefa"));
  }

}
