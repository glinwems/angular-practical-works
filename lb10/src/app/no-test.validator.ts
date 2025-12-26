import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noTestValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const value = String(control.value).toLowerCase();
    if (value.includes('test')) {
      return { noTest: { message: 'Ім\'я не може містити слово "test"' } };
    }

    return null;
  };
}

