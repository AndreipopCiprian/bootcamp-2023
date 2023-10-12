import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicationFormGroup } from './core/types/application-form-group';
import { ApplicationFormService } from './core/services/application-form.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

  public applicationFormGroup = new FormGroup<ApplicationFormGroup>({
    firstName: new FormControl<string | null>('', [Validators.required]),
    lastName: new FormControl<string | null>('', [Validators.required]),
    phoneNumber: new FormControl<string | null>(''),
    emailAddress: new FormControl<string | null>('', [Validators.required]),
    addressLine1: new FormControl<string | null>('', [Validators.required]),
    addressLine2: new FormControl<string | null>(''),
    country: new FormControl<string | null>(''),
    state: new FormControl<string | null>(''),
    city: new FormControl<string | null>('', [Validators.required]),
  })

  public countries: any[] = [];
  public cities: any[] = [];
  public states: any[] = [];

  constructor(
    private applicationFormService: ApplicationFormService
  ) {

  }

  ngOnInit(): void {
    console.log(this.applicationFormGroup)
    // this.applicationFormService.getCountriesAndTheirCities().subscribe((response: any) => { this.countries = response?.["data"] as any[] })
    this.applicationFormService.getCountriesAndTheirState().subscribe((response: any) => { this.countries = response?.["data"] as any[] })
  }

  handleCountryChange() {
    const contryValues = this.applicationFormGroup.controls.country.value;
    this.states = this.countries.find((item) => item.name === contryValues)?.states;
  }

  handleStateChange() {
    const stateValue = this.applicationFormGroup.controls.state.value;
    const contryValues = this.applicationFormGroup.controls.country.value;
    if (contryValues && stateValue) {
      this.applicationFormService.getCitiesInAState({ country: contryValues, state: stateValue }).subscribe((response: any) => { this.cities = response?.["data"] as any[] })
    }
  }

  submitApplicationForm(){
    
  }

}
