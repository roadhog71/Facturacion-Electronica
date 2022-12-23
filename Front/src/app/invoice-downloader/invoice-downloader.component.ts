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
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router)
              {
                this.loginForm = this.fb.group({
                  cdc: ['', Validators.required],
                  //password: ['', [Validators.required, Validators.minLength(6)]],
                });
              }

  ngOnInit(): void {}


  get cdc() {
    return this.loginForm.get('cdc');
  }




  onFind() {
    console.log('Entra al find');
    if (!this.loginForm.valid) {
      return;
    }

    this.gotoFacturaCard();

  }


  gotoFacturaCard() {
    this.cardUrl = 'factura'
    //let consStr = JSON.stringify(this.consultaResponse);
    //this.router.navigate([`${this.cardUrl}`, consStr]);
    let route = [`${this.cardUrl}/${this.cdc?.value}`]
    console.log('route:', route)
    this.router.navigate([`${this.cardUrl}/${this.cdc?.value}`]);
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
