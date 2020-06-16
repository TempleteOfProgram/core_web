import { AbstractControl} from '@angular/forms';
import moment from 'moment';

export class DateValidator {

  static get legitDate(): any {
    return (control: AbstractControl): { [key: string]: any } => {
      const v: string = control.value;
      if (!control.value) return null;

      const momentDob = moment(v, 'MM/DD/YYYY',true).isValid();

      return !momentDob ?
        { "legitDate": true } :
        null;
    };
  }

  static get validLeaseMonth() { 
    return (control: AbstractControl): { [key: string]: any } => {
      const v: string = control.value;
      if (!control.value) return null;
      const momentDob = moment(v, 'MM/DD/YYYY',true).isValid();
      if (momentDob) { 
        let today = new Date()
        const currentMonth = today.getMonth() +1;
        let pickedDate = new Date(v);
        let pickedMonth = pickedDate.getMonth() +1;
        return pickedMonth > currentMonth?
        { "leaseMonth": true } :
        null;
        }
      }
  }

  static get validLeaseYear() { 
    return (control: AbstractControl): { [key: string]: any } => {
      const v: string = control.value;
      if (!control.value) return null;
      const momentDob = moment(v, 'MM/DD/YYYY',true).isValid();
      if (momentDob) { 
        let today = new Date()
        const currentYear = today.getFullYear();
        let pickedDate = new Date(v);
        let pickedYear = pickedDate.getFullYear();
        return pickedYear > currentYear?
        { "leaseYear": true } :
        null;
        }
      }
  }
 
}


/**USAGE: 
createLeasingForm() {  // *.component.ts
    this.leasingFormGroup = this.formBuilder.group({
      keyExchangeDate: this.formBuilder.control({ value: null, disabled: !this.isKeyExchangeUsed() }, [Validators.required, LegitDateValidator.legitDate, LegitDateValidator.validLeaseMonth, LegitDateValidator.validLeaseYear])
    });
  }
    ========================//*.component.ts
    <div *ngIf="isKeyExchangeUsed()" class="form-group col-md-4"
       [class.validated]="(leasingForm.keyExchangeDate.dirty || leasingForm.keyExchangeDate.touched)"
       [class.required]="isLeasingFormEditable">
    <label class="form-control-label">Key Exchange Date</label>
    <div>
      <lms-datepicker [disabled]="leasingForm.keyExchangeDate?.disabled" [control]="leasingForm.keyExchangeDate"></lms-datepicker>
    </div>
    <div *ngIf="leasingForm.keyExchangeDate?.errors?.legitDate" class="invalid-feedback fade-in">
      Enter a valid date (MM/DD/YYYY)
    </div>
    <div *ngIf="leasingForm.keyExchangeDate?.errors?.leaseMonth && !leasingForm.keyExchangeDate?.errors?.legitDate" class="invalid-feedback fade-in">
      Leasing month can not be prior to the current month.
    </div>
    <div *ngIf="leasingForm.keyExchangeDate?.errors?.leaseYear && !leasingForm.keyExchangeDate?.errors?.legitDate && !leasingForm.keyExchangeDate?.errors?.leaseMonth" class="invalid-feedback fade-in">
      Leasing year can not be prior to the current year.
    </div>
  </div>
**/
