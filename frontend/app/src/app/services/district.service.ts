import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backend } from './localHost';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DistrictService {
  constructor(private http: HttpClient) {}
  backend = backend;

  showDIstrict() {
    return firstValueFrom(this.http.get(`${this.backend}/district/get`));
  }

  districtName(idMatSek: number) {
    return firstValueFrom(
      this.http.get(`${this.backend}/district/districtName/${idMatSek}`)
    );
  }
  getDistrict(){
    return firstValueFrom(this.http.get(`${this.backend}/district/getDistrict`))
  }
  
}
