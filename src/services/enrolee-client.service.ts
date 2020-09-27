import { environment } from '../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnroleeClientService {
  constructor(private _http: HttpClient) { }

  getEnrollees() {
    return this._http.get(environment.enrolleServiceURL + 'enrollees')
  }
  upateEnrollee(enrolee) {
    return this._http.put(environment.enrolleServiceURL + 'enrollees/' + enrolee.id, enrolee)
  }
}
