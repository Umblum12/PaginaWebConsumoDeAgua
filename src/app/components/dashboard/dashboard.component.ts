import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Database, set, ref, update, onValue, remove, DataSnapshot, child, getDatabase, get, object } from '@angular/fire/database';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dataUser: any;
  firstValor: any; // valor actual de la base de datos
  consumo: any[];
  timeLeft = 60;
  interval: any;
  constructor(
    private router: Router,
    public database: Database
  ) {
    this.consumo = [];
    this.getusers();
    this.startTimer();
  }
  startTimer() {
    this.interval = setInterval(() => {
      this.getusers(); //METODO PARA ACTUALIZAR DATOS DE WEBAPI

      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 500);
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
//Mostrar
 getusers() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `Consumodeagua/SensordeFlujo/${[]}`)).then((snapshot) => {
    if (snapshot.exists()) {
      this.consumo = Object.keys(snapshot.val() || {}).map(k => snapshot.val()[k]); //esta cochinada hace todo lo que era el problema
      //mete todo el objeto que me da snapshot y lo pone en un arreglo que si se puede leer por registros por separado alm 
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}
  ngOnInit(): void {

  }
}