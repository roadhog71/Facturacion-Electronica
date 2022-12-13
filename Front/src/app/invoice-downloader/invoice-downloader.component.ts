import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConsultaCdcRequest } from '../service/consulta.cdc.request';
import { ConsultaCdcResponse } from '../service/consulta.cdc.response';
import { EfacturaService } from '../service/efactura.service';

@Component({
  selector: 'app-invoice-downloader',
  templateUrl: './invoice-downloader.component.html',
  styleUrls: ['./invoice-downloader.component.css'],
})
export class InvoiceDownloaderComponent implements OnInit {
  isChecked = true;
  hide: boolean = false;
  cdcResponse: any;
  constructor(private fb: FormBuilder,
              public service: EfacturaService) {}

  ngOnInit(): void {}
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  get email() {return this.loginForm?.get('email');}

  onLogin() {
    if (!this.loginForm.valid) {
      return;
    }
    let cdcRequest: ConsultaCdcRequest = {cdc: String(this.email),
                                          retornarKuDE:true,
                                          nombrePlantilla: '',
                                          retornarRespuestaOriginal: true,
                                          retornarXmlDE: true,
                                          apikey: '',
                                          usuario: ''}

    this.service.findByCDC(cdcRequest).subscribe((
      data: any) => {
        this.cdcResponse = data as ConsultaCdcResponse;
      });
  }



}
