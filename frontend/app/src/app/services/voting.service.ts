import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { backend } from './localHost';
import { Voting } from '../models/Voting';
 import { User } from '../models/User';


@Injectable({
  providedIn: 'root',
})
export class VotingService {
  constructor(private http: HttpClient) {}

  backend = backend;

  addVote(vote: Voting[]) {
    return firstValueFrom(this.http.put(`${backend}/voting/vote`, vote));
  }

  // isVoteStatus(idCla:number) {
  //   return firstValueFrom(this.http.put(`${backend}users/isVoteStatus`, idCla));
  // }
}
