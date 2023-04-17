import { ValidatorFn, AbstractControl } from '@angular/forms';

export function notNegativeLength(): ValidatorFn {
  return (control: AbstractControl) => {
    const currentLength = control.value as string;

    if (!currentLength) {
      return null;
    }

    if (parseInt(currentLength, 10) < 0) {
      return {
        negativeLength: true,
      };
    }
    return null;
  };
}
