import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import {LoginPage} from "../pages/login/login";
import { LoginProvider } from '../providers/login/login';
import {RegistrarPage} from "../pages/registrar/registrar";
import {HttpModule} from "@angular/http";
import firebase from "firebase";
import { TarefaListViewComponent } from '../components/tarefa-list-view/tarefa-list-view';
import { TarefaProvider } from '../providers/tarefa/tarefa';
import {TarefasListPage} from "../pages/tarefas-list/tarefas-list";
import {TarefasAddPage} from "../pages/tarefas-add/tarefas-add";
import { LovProvider } from '../providers/lov/lov';

const firebaseconfig = {
  apiKey: "AIzaSyCmAZRNCG0gF6Vw5l-ANCFhJwfAGWWmbKQ",
  authDomain: "listador-de-tarefas-53871.firebaseapp.com",
  databaseURL: "https://listador-de-tarefas-53871.firebaseio.com",
  projectId: "listador-de-tarefas-53871",
  storageBucket: "listador-de-tarefas-53871.appspot.com",
  messagingSenderId: "1038497169952"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrarPage,
    TarefasListPage,
    TarefasAddPage,
    TarefaListViewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, // Deve ser adicionado para a navegação funcionar no browser
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrarPage,
    TarefasListPage,
    TarefasAddPage,
    TarefaListViewComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    TarefaProvider,
    LovProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseconfig);
  }
}
