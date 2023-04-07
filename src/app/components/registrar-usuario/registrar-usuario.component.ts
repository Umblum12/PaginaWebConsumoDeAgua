import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService
  ) {
    this.registrarUsuario = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(3)]],
      ApellidoPaterno: ['', [Validators.required, Validators.minLength(3)]],
      ApellidoMaterno: ['', [Validators.required, Validators.minLength(3)]],
      Correo: ['', [Validators.required, Validators.email]],
      Direccion: ['', [Validators.required, Validators.minLength(3)]],
      FechaNacimiento: ['', Validators.required],
      Contrasena: ['', [Validators.required, Validators.minLength(8)]],
      Confirmarcontrasena: ['', [Validators.required, Validators.minLength(8)]],
    })
  }
  ngOnInit(): void {
  }
  registrar() {
    const Nombre = this.registrarUsuario.value.Nombre;
    const ApellidoPaterno = this.registrarUsuario.value.ApellidoPaterno;
    const ApellidoMaterno = this.registrarUsuario.value.ApellidoMaterno;
    const Correo = this.registrarUsuario.value.Correo;
    const Direccion = this.registrarUsuario.value.Direccion;
    const FechaNacimiento = this.registrarUsuario.value.FechaNacimiento;
    const Contrasena = this.registrarUsuario.value.Contrasena;
    const Confirmarcontrasena = this.registrarUsuario.value.Confirmarcontrasena;
    if (Contrasena !== Confirmarcontrasena) {
      this.toastr.error('!Las contraseñas no coinciden¡', 'Error');
      return;
    }
    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(Correo, Contrasena)
      .then((user) => {
        this.verificarCorreo();
      }).catch((error) => {
        this.loading = false;
        this.toastr.error(this.firebaseError.CodeError(error.code), 'Error');
      })
  }
  verificarCorreo() {
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.loading = false;
        this.toastr.info('¡El usuario se ha registrado con exito!', 'Verificar correo');
        this.router.navigate(['/login']);
      });
  }
}