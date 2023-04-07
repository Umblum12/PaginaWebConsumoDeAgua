import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface Sensor {
  flujo: number;
}
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'https://consumodeaguapi-default-rtdb.firebaseio.com/Consumodeagua/SensordeFlujo.json';
  sensor: Sensor = {
    flujo: 0
  };
  sensorList: Sensor[] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(
    private http: HttpClient,
  ) { }
  getSensores(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.apiUrl);
  }
}