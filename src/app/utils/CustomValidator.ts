import {AbstractControl} from "@angular/forms";

export function ValidateSoldQuantity(form: AbstractControl): { [key: string]: any } | null {
  const value1 = form.get('quantitySoldLastMonth');
  const value2 = form.get('quantitySoldWholePeriod');

  if (value1 && value2) {
    if (value1.value > value2.value) {
      value1.setErrors({'mismatch': true});
      return {invalid: true};
    } else {
      if (value1.hasError('mismatch')) {
        value1.updateValueAndValidity();
      }
    }
  }
  return null;
}
