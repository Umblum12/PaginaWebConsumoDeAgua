import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GraficaSensorFlujoComponent } from './components/grafica-sensor-flujo/grafica-sensor-flujo.component';
import { HistorialComponent } from './components/historial/historial.component';
import { ValvulaComponent } from './components/valvula/valvula.component';
import { GraficaValvulaComponent } from './components/grafica-valvula/grafica-valvula.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent},
  { path: 'verificar-correo', component: VerificarCorreoComponent},
  { path: 'recuperar-password', component: RecuperarPasswordComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'valvula', component: ValvulaComponent},
  { path: 'Historial', component: HistorialComponent},
  { path: 'Grafica-sensor-flujo', component: GraficaSensorFlujoComponent},
  { path: 'Grafica-valvula', component: GraficaValvulaComponent},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }