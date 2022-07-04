import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoints } from './endpoints';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoints = new endpoints();
  private headers = new HttpHeaders();
  private token = "";

  constructor(private http: HttpClient, private ck: CookieService) {
    this.token = ck.get("token");
    this.headers
      .set("Content-Type", "application/json; charset=utf-8")
      .set("X-Protection-Token", this.token)
    ;
  }

  private _post(endpoint: string, data: any)
  {
    var gateway = "https://api.server";
    return this.http.post(gateway + endpoint, data, {headers: this.headers});
  }

  public logout(): Observable<any> { return this._post(this.endpoints.users_logout, {token: this.token}); }
}
