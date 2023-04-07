import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from "@angular/forms";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';


//Componentes
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { BarraNavegacionPrincipalComponent } from './components/barra-navegacion-principal/barra-navegacion-principal.component';
import { BarraNavegacionSesionIniciadaComponent } from './components/barra-navegacion-sesion-iniciada/barra-navegacion-sesion-iniciada.component';
import { GraficaSensorFlujoComponent } from './components/grafica-sensor-flujo/grafica-sensor-flujo.component';
import { HistorialComponent } from './components/historial/historial.component';
import { ValvulaComponent } from './components/valvula/valvula.component';
import { GraficaValvulaComponent } from './components/grafica-valvula/grafica-valvula.component';
import { HistorialAdminComponent } from './components/historial-admin/historial-admin.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    DashboardComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    BarraNavegacionPrincipalComponent,
    BarraNavegacionSesionIniciadaComponent,
    GraficaSensorFlujoComponent,
    HistorialComponent,
    ValvulaComponent,
    GraficaValvulaComponent,
    HistorialAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularFireDatabaseModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
