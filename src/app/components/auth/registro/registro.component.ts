import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import { sexoEmbarazo } from 'src/app/helpers/validation';
import { Registro } from 'src/app/models/user.interface';
import { SignUp } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [MessageService],
})
export class RegistroComponent implements OnInit {
  constructor(
    private store$: Store,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  

  registroForm = this.fb.group(
    {
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      sexo: ['', Validators.required],
      embarazo_lactancia: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      teléfono: ['', [Validators.required]],
    },
    { validators: sexoEmbarazo }
  );

  registro(): void {
    console.log(this.registroForm.value);
    console.log('store', this.store$);
    //this.messageService.add({severity:'success', summary: 'Success', detail: JSON.stringify(this.registroForm.value)});
    this.store$.dispatch(
      SignUp({ params: this.registroForm.value as Registro })
    );
  }
}
