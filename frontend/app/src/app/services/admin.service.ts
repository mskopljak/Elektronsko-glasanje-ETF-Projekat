import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { backend } from './localHost';
import { firstValueFrom } from 'rxjs';
import { Status } from '../models/Status';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  backend = backend;

  getStatus() {
    return firstValueFrom(this.http.get(`${this.backend}/status/get`));
  }

  setStatus(statusIzbora: Status) {
    return firstValueFrom(
      this.http.post(`${this.backend}/status/set`, statusIzbora)
    );
  }
  refreshPage() {
    location.reload(); 
  }

}
