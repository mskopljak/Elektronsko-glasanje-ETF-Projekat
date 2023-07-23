import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backend } from './localHost';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberslistService {
  constructor(private http: HttpClient) {}

  backend = backend;

  getList() {
    return firstValueFrom(this.http.get(`${this.backend}/membersList/get`));
  }
  getCandidates() {
    return firstValueFrom(
      this.http.get(`${this.backend}/membersList/candidates`)
    );
  }
  getResults() {
    return firstValueFrom(this.http.get(`${this.backend}/membersList/results`));
  }
  showCenter() {
    return firstValueFrom(this.http.get(`${this.backend}/membersList/Center`));
  }

}
