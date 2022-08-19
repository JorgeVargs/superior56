import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  formDatos: any;

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formDatos= new FormGroup({
      nombre: new FormControl('',[Validators.required,Validators.minLength(10)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      mensaje: new FormControl('',[Validators.required,Validators.minLength(10)])
    })
  }

  isValid(nombreControl:string){
    return (this.formDatos.get(nombreControl).invalid && this.formDatos.get(nombreControl).touched) 
  }

  enviarFormulario(){
    console.log(this.formDatos.value);

    const email = this.formDatos.value;    
  }

}
