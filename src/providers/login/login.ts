import {EventEmitter, Injectable, NgZone} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Credencial} from "../../models/credencial";
import firebase from "firebase";

/*
  Generated class for the LoginProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginProvider {

  currentUser:any;
  autenticado:boolean;
  loginSuccessEventEmitter:EventEmitter<any>;
  loginFalhaEventEmitter:EventEmitter<any>;
  logoutEventEmitter:EventEmitter<any>;

  constructor(public http: Http, public ngZone: NgZone) {
    this.loginSuccessEventEmitter = new EventEmitter();
    this.loginFalhaEventEmitter = new EventEmitter();
    this.loginFalhaEventEmitter = new EventEmitter();
    firebase.auth().onAuthStateChanged(usuario => {
      this.callbackStateChange(usuario);
    })
  }

  private callbackStateChange(usuario){
    this.ngZone.run( () =>{
      if(usuario == null){
        this.currentUser = null;
        this.autenticado = false;
      }else{
        this.currentUser = usuario;
        this.autenticado = true;
      }
    })
  }

  loginComCredencial(credencial:Credencial){
    firebase.auth().signInWithEmailAndPassword(credencial.email, credencial.senha)
      .then(result => this.callbackSucessLogin(result))
      .catch(error => this.callbackFalhaLogin(error));
  }

  loginComGoogle(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => this.callbackSucessLogin(result))
      .catch(error => this.callbackFalhaLogin(error));
  }

  loginComFacebook(){
    let provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider)
      .then(result => this.callbackSucessLogin(result))
      .catch(error => this.callbackFalhaLogin(error))
  }

  sair(){
    firebase.auth().signOut()
      .then(() => this.logoutEventEmitter.emit(true))
      .catch(error => this.callbackFalhaLogin(error))
  }

  registrarUsuario(credencial:Credencial){
    firebase.auth().createUserWithEmailAndPassword(credencial.email, credencial.senha)
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  private callbackSucessLogin(response){
    this.loginSuccessEventEmitter.emit(response.user);
  }

  private callbackFalhaLogin(error){
    this.loginFalhaEventEmitter.emit({code : error.code, message: error.message, email: error.email, credencial: error.credencial});
  }
}
