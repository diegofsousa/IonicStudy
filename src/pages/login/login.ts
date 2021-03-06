import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RegistrarPage} from "../registrar/registrar";
import {LoginProvider} from "../../providers/login/login";
import {Credencial} from "../../models/credencial";
import {TarefasListPage} from "../tarefas-list/tarefas-list";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credencial:Credencial;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public loginProvider: LoginProvider) {
    this.credencial = new Credencial();
  }

  ionViewDidLoad(){

    this.loginProvider.loginSuccessEventEmitter.subscribe(
      user => this.navCtrl.setRoot(TarefasListPage)
    );
    this.loginProvider.loginFalhaEventEmitter.subscribe(
      error => console.log(error)
    );
  }

  loginWithCredencial(){
    this.loginProvider.loginComCredencial(this.credencial);
  }

  loginComFacebook(){
    this.loginProvider.loginComFacebook();
  }

  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }

  doRegister(){
    this.navCtrl.push(RegistrarPage);
  }
}
