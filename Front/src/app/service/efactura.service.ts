import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConsultaCdcRequest } from './consulta.cdc.request';
import { ConsultaCdcResponse } from './consulta.cdc.response';

@Injectable({
  providedIn: 'root'
})
export class EfacturaService {
  http: HttpClient;
  getRoute(): string {
    return 'v1/consultas/cdc';
  }
  constructor(http: HttpClient) {
    this.http = http;
  }

  findByCDC(body: ConsultaCdcRequest){
    return this.http.post<ConsultaCdcResponse>(`${this.getUrlBase}`, body);
  }

  getUrlBase() {
    return `${environment.base_url}/${this.getRoute()}`;
  }
}


