import { AbstractControl, FormGroup, ValidatorFn, ValidationErrors } from "@angular/forms";

export function tierValidation(priceField: string, tierField: string): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const priceValue = control.get(priceField)?.value;
    const tierValue = control.get(tierField)?.value;

    if ((priceValue == 0.00 && tierValue ==="paid") || (priceValue > 0.00 && tierValue === "free")){
      return {tierValidate: true}
    }

    return null;
  }
}


