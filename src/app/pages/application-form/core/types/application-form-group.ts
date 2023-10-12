import { FormControl } from "@angular/forms"

export type ApplicationFormGroup = {
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    phoneNumber: FormControl<string | null>;
    emailAddress: FormControl<string | null>;
    addressLine1: FormControl<string | null>;
    addressLine2: FormControl<string | null>;
    country: FormControl<string | null>;
    state: FormControl<string | null>;
    city: FormControl<string | null>;
}