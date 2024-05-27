import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { initializeApp } from 'firebase/app';

import { ToastController } from '@ionic/angular';

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

import { environment } from 'src/environments/environment';

import { getDatabase, ref, onValue, set, push } from 'firebase/database';
import { idTokenResult } from '@angular/fire/compat/auth-guard';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  app = initializeApp(environment.firebaseConfig)
  auth = getAuth(this.app);

  constructor(private router: Router, private toastController: ToastController) { }

  async login(email: string, password: string) {
    await signInWithEmailAndPassword(this.auth, email, password)
      .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        this.presentToast(user.email);
        await this.router.navigate(['/tabs'], { replaceUrl: true });
        // ...
      })
      .catch( (error) => {
        console.log("err");
      });
    console.log("-----");
  }

  async presentToast(text: any) {
    const toast = await this.toastController.create({
      message: 'Bienvenido ' + text,
      duration: 3000,
      position: 'top',
      icon: 'hand-left-outline'
    });

    await toast.present();
  }

  logout(){
    signOut(this.auth).then(() => {
      // Sign-out successful.
      console.log("signed Out");
    }).catch((error) => {
      // An error happened.
      console.log(error.code);
    });
  }

  userlogged(){
    if(this.auth.currentUser != null){
      return true;
    }else{
      return false;
    }
  }

  addKey(){
    const db = getDatabase();
    push(ref(db, 'Claves/'), {
      Status: 'Sin Generar',
      Usuario: '',
      Ubicacion: {
        Latitud: '',
        Longitud: ''
      }
    });
    this.addKeyToast();
  }

  async addKeyToast() {
    const toast = await this.toastController.create({
      message: 'Clave Agregada con Exito',
      duration: 2000,
      position: 'bottom',
      icon: 'bag-check.outline'
    });

    await toast.present();
  }

  getKeys(){
    let listaClaves: any[] = [];
    let listaKeys: any[] = [];
    const db = getDatabase();
    const starCountRef = ref(db, 'Claves/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0;
      snapshot.forEach((element) => {
        listaKeys[cont] = element.key;
        listaClaves[cont] = [element.key, element.toJSON()];
        cont++;
      });
    });
    return listaClaves;
  }

  getUsers(){
    let listaUsuarios: any[] = [];
    let listaKeys: any[] = [];
    const db = getDatabase();
    const starCountRef = ref(db, 'Usuarios/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0;
      snapshot.forEach((element) => {
        listaKeys[cont] = element.key;
        listaUsuarios[cont] = [element.key, element.toJSON()];
        cont++;
      });
    });
    return listaUsuarios;
  }

  

}
