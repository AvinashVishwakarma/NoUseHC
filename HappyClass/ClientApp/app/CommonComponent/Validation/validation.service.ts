
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormControl, AbstractControl } from '@angular/forms/src/model';
export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        //debugger;
        let config: any = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Password must be at least 6 characters long, and contain a number.',
            'MatchPassword': "Password didn't match",
            'minlength': `Minimum length should be ${validatorValue.requiredLength}`,
            'maxlength': `Maximum length should be ${validatorValue.requiredLength}`,
            'invalidMobileNumber': 'Mobile number is not valid',
            'invalidAlphabets': 'Field has invalid character',
            'invalidFirstname': 'Firstname is not valid',
            'invalidLastname': 'Lastname is not valid'
        };
        
        return config[validatorName];
    }

    static creditCardValidator(control: AbstractControl) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }
    }

    static emailValidator(control: AbstractControl) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }

    static mobileValidator(control: AbstractControl) {
        // RFC 2822 compliant regex
        if (control.value.length == 10) {
            return null;
        } else {
            return { 'invalidMobileNumber': true };
        }
    }

    static passwordValidator(control: AbstractControl) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }

    static MatchPassword(control: AbstractControl) {
        let password1 = control.get('password');
        let confirmPassword1 = control.get('confirmPassword');
        if (password1 && confirmPassword1 && password1.status == "VALID") {
            let password = password1.value; // to get value in input tag
            let confirmPassword = confirmPassword1.value; // to get value in input tag
            if (password != confirmPassword) {
                console.log('false');
                confirmPassword1.setErrors({ MatchPassword: true })
            } else {
                console.log('true');
                //confirmPassword1.setErrors({});
                return null
            }
        }
    }

    static alphabetValidator(control: AbstractControl) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[a-zA-Z]*$/)) {
            return null;
        } else {
            return { 'invalidAlphabets': true };
        }
    }

    static lastnameValidator(control: AbstractControl) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[a-zA-Z]*$/)) {
            return null;
        } else {
            return { 'invalidLastname': true };
        }
    }

    static firstnameValidator(control: AbstractControl) {
        // RFC 2822 compliant regex
        if (control.value.match(/^[a-zA-Z ]*$/)) {
            return null;
        } else {
            return { 'invalidFirstname': true };
        }
    }
}
