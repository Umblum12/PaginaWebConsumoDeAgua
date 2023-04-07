import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-barra-navegacion-sesion-iniciada',
  templateUrl: './barra-navegacion-sesion-iniciada.component.html',
  styleUrls: ['./barra-navegacion-sesion-iniciada.component.css']
})
export class BarraNavegacionSesionIniciadaComponent implements OnInit {
  admin=sessionStorage.getItem("admin");
  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ) {
  }
  ngOnInit(): void {
  }
  logout(){
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
    sessionStorage.setItem("admin","false");
    this.admin=sessionStorage.getItem("admin");
  }
}
