import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backend } from './localHost';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegcenService {

  
  constructor(private http: HttpClient) { }

  backend = backend

  regCenName(idRegCen: number){
    return firstValueFrom(this.http.get(`${this.backend}/center/regCenName/${idRegCen}`));
  }
  getCenter(){
    return firstValueFrom(
      this.http.get(`${this.backend}/center/get`)
    )
  }
}
