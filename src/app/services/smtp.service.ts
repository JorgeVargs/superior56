import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IContacto } from '../interfaces/IContacto';

@Injectable({
  providedIn: 'root'
})
export class SmtpService {
  private apiURL = environment.api_smtp;

  constructor(private http: HttpClient) { }

  send_email(data: IContacto) {
    return this.http.post(`${this.apiURL}`, data);
  }
}
