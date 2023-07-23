import { Injectable } from '@angular/core';
import { backend } from './localHost';
import { HttpClient } from '@angular/common/http';
import { Candidate } from '../models/Candidate';
import { Observable, firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CandResultsService {



  constructor(private http: HttpClient) { }

  backend = backend


  addSelectedCandidates(selectedCandidates: Candidate[]): Observable<any>{
    return this.http.post<any>(`${this.backend}/results/addVote`, selectedCandidates);
  }

  
}
