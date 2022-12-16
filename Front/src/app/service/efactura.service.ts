import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ConsultaCdcRequest } from './consulta.cdc.request';
import { ConsultaCdcResponse } from './consulta.cdc.response';
import { ConsultaRequest } from './consulta.request';
import { ConsultaResponse } from './consulta.response';

@Injectable({
  providedIn: 'root'
})
export class EfacturaService {
  http: HttpClient;
  getRoute(): string {
    return 'v1/consultas';
  }
  constructor(http: HttpClient) {
    this.http = http;
  }

  findByCDC(body: ConsultaCdcRequest){
    console.log('api url: ', this.getUrlBase())
    return this.http.post<ConsultaCdcResponse>(`${this.getUrlBase()}/cdc`, body);
  }


  findAll(body: ConsultaRequest){
    console.log('api url: ', this.getUrlBase())
    return this.http.post<ConsultaResponse>(`${this.getUrlBase()}`, body);
  }


  getUrlBase() {
    return `${environment.base_url}/${this.getRoute()}`;
  }
}


