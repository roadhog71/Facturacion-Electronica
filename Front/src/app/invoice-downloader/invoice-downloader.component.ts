import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaCdcResponse } from '../service/consulta.cdc.response';
import { ConsultaResponse } from '../service/consulta.response';
import { EfacturaService } from '../service/efactura.service';

@Component({
  selector: 'app-invoice-downloader',
  templateUrl: './invoice-downloader.component.html',
  styleUrls: ['./invoice-downloader.component.css'],
})
export class InvoiceDownloaderComponent implements OnInit {
  isChecked = true;
  hide: boolean = false;
  consultaResponse: any;
  cardUrl: any;
  service: any;


  constructor(private fb: FormBuilder,
              service: EfacturaService,
              private router: Router) {
                this.service = service;
              }

  ngOnInit(): void {}
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]]
    //password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get email() {return this.loginForm?.get('email');}




  onFind() {
    console.log('Entra al find');
    if (!this.loginForm.valid) {
      return;
    }


    let consultaRequest = { cdc: [this.email?.value],
                            maximoResultados: 1,
                            retornarKuDE: true,
                            retornarXmlFirmado: true
                          }

    console.log(consultaRequest);

    this.service.findAll(consultaRequest).subscribe((
      data: any) => {
        this.consultaResponse = data as ConsultaResponse;
        console.log(this.consultaResponse);
        this.gotoFacturaCard();
      });
  }


  gotoFacturaCard() {
    if (this.consultaResponse) {
      this.cardUrl = 'factura'
      let consStr = JSON.stringify(this.consultaResponse);
      this.router.navigate([`${this.cardUrl}`, consStr]);
    }
  }


  /*onLogin() {
    console.log('Entra al login');
    if (!this.loginForm.valid) {
      return;
    }
    let cdcRequest = { cdc: this.email?.value,
                       retornarKuDE:true,
                       retornarRespuestaOriginal: true,
                       retornarXmlDE: true,
                       apikey: '',
                       usuario: ''};
    console.log(cdcRequest);

    this.service.findByCDC(cdcRequest).subscribe((
      data: any) => {
        this.cdcResponse = data as ConsultaCdcResponse;
        console.log(this.cdcResponse);
      });
  }*/


}
