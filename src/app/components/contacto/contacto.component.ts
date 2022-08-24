import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IContacto } from 'src/app/interfaces/IContacto';
import { SmtpService } from 'src/app/services/smtp.service';
import Swal from 'sweetalert2';

declare var Email: any;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  token: string | undefined;


  constructor(
    private smtpService: SmtpService,
    private router: Router
    ) {
    this.token = undefined;
  }

  formDatos: any;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formDatos = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
      telefono: new FormControl('', [Validators.required, Validators.min(1)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required, Validators.minLength(10)]),
      politica: new FormControl(false, [Validators.required])
      
    })
  }

  isValid(nombreControl: string) {
    return (this.formDatos.get(nombreControl).invalid && this.formDatos.get(nombreControl).touched)
  }

  enviarFormulario() {
    let data: IContacto = this.formDatos.value;
    if (!this.formDatos.invalid) {
      if (this.formDatos.controls.politica.value == false) {
        Swal.fire(Object.assign({
          icon: "info",
          confirmButtonText: "Aceptar",
          showCloseButton: false,
          text: 'Acepte la politica de privacidad',
          confirmButtonColor: "#C09E58"
        }));
        return;
      }

      if (this.token == undefined) {
        Swal.fire(Object.assign({
          icon: "info",
          confirmButtonText: "Aceptar",
          showCloseButton: false,
          text: 'Genere el captcha',
          confirmButtonColor: "#C09E58"
        }));
        return;
      }

      this.smtpService.send_email(data).subscribe(
        (response) => {
          Swal.fire(Object.assign({
            icon: "success",
            confirmButtonText: "Aceptar",
            showCloseButton: false,
            text: 'La información se envio correctamente',
            confirmButtonColor: "#C09E58"
          }));
          this.formDatos.reset();
          //por validar si funciona
          this.router.navigate(['./gracias']);
        },
        (error) => {
          console.log(error);
          Swal.fire(Object.assign({
            icon: "error",
            confirmButtonText: "Aceptar",
            showCloseButton: false,
            text: 'Ocurrio un error al enviar la información',
            confirmButtonColor: "#C09E58"
          }));
        }

      )
    } else {
      Swal.fire(Object.assign({
        icon: "info",
        confirmButtonText: "Aceptar",
        showCloseButton: false,
        text: 'Complete los campos requeridos',
        confirmButtonColor: "#C09E58"
      }));
    }
  }


  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    console.debug(`Token [${this.token}] generated`);
  }


}
