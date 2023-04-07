import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { retry, toArray } from 'rxjs';
import { Database, set, ref, update, onValue, remove, DataSnapshot, child, getDatabase, get, object } from '@angular/fire/database';
@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  constructor(public database: Database) {//iniciador
    this.usuarios = [];
    this.getusers();
    this.startTimer();
  }
  timeLeft = 60;
  interval: any;
  usuarios: any[];
  startTimer() {
    this.interval = setInterval(() => {
      this.getusers(); //METODO PARA ACTUALIZAR DATOS DE WEBAPI
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 500)
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
  //Mostrar
  getusers() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Consumodeagua/Historial/${[]}`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.usuarios = Object.keys(snapshot.val() || {}).map(k => snapshot.val()[k]); //esta cochinada hace todo lo que era el problema
        //mete todo el objeto que me da snapshot y lo pone en un arreglo que si se puede leer por registros por separado alm 
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
}