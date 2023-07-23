import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, retry } from 'rxjs';
import { User } from '../models/User';
import { backend } from './localHost';


@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  constructor(private http: HttpClient) { }

  backend = backend


  login(user: User){
    return firstValueFrom(this.http.post(`${this.backend}/users/login`, user));
  }

  candidatesByDistrict(user: User){
    return firstValueFrom(this.http.post(`${this.backend}/users/candidatesByDistrict`, user))
  }

  confirmVote(user: User){
    return firstValueFrom(this.http.post(`${this.backend}/users/confirmVote`, user))
  }

  getAllCandidates() {
    return firstValueFrom(this.http.get(`${this.backend}/users/allCandidates`));
  }

  getElectedCandidates(){
    return firstValueFrom(this.http.get(`${this.backend}/users/electedCandidates`))
  }

  isVoteStatus(user: User){
    return firstValueFrom(this.http.put(`${this.backend}/users/isVoteStatus`, user))
  }

  
}
