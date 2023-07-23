/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backend } from './localHost';
import { firstValueFrom } from 'rxjs';
import { Center } from '../models/regionalcenter';

@Injectable({
  providedIn: 'root'
})
export class ReginalcenterService {

  constructor(private http: HttpClient) { }

  backend = backend;

  getCenter(){
    return firstValueFrom(
      this.http.get(`${this.backend}/center/get`)
    )
  }
 
}*/
