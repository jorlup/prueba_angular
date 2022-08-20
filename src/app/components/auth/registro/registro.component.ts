import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { sexoEmbarazo } from 'src/app/helpers/validation';
import { Registro } from 'src/app/models/user.interface';
import { SignUp } from 'src/app/store/actions/auth.actions';
import { ResetUser } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {
  constructor(
    private store$: Store,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // se borra en caso de un nuevo registro, similar a un logout
    localStorage.removeItem('accessToken');
    this.store$.dispatch(ResetUser());
  }

  registroForm = this.fb.group(
    {
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      embarazo_lactancia: [false, Validators.required],
      fecha_nacimiento: ['', Validators.required],
      teléfono: ['', [Validators.required]],
    },
    { validators: sexoEmbarazo }
  );

  registro(): void {
    console.log(this.registroForm.value);
    console.log('store', this.store$);
    this.store$.dispatch(
      SignUp({ params: this.registroForm.value as Registro })
    );
  }
}
