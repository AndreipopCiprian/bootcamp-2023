import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApplicationFormService {

  constructor(
    private http: HttpClient 
  ) { }

  public getCountriesAndTheirCities(){
    return this.http.get("https://countriesnow.space/api/v0.1/countries")
  }

  public getCountriesAndTheirState(){
    return this.http.get("https://countriesnow.space/api/v0.1/countries/states")
  }

  public getCitiesInAState(data: {country:string, state:string}){
    return this.http.post("https://countriesnow.space/api/v0.1/countries/state/cities", data);
  }
}
