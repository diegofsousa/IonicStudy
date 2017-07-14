import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import { LoginProvider } from '../providers/login/login';
import {RegistrarPage} from "../pages/registrar/registrar";
import {HttpModule} from "@angular/http";
import firebase from "firebase";

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
    HomePage,
    LoginPage,
    RegistrarPage
  ],
  imports: [
    BrowserModule,
    HttpModule, // Deve ser adicionado para a navegação funcionar no browser
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegistrarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider
  ]
})
export class AppModule {
  constructor(){
    firebase.initializeApp(firebaseconfig);
  }
}
