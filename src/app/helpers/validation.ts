import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/** A hero's name can't match the hero's alter ego */
export const sexoEmbarazo: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const sexo = control.get('sexo');
    const embarazo = control.get('embarazo_lactancia');
  
    return sexo && embarazo && sexo.value === 'masculino' && embarazo.value == true ? { embarazoError: true } : null;
  };