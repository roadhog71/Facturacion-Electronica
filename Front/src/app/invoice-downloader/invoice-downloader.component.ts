import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


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
  findForm: FormGroup;
  public siteKey: any;
  constructor(private fb: FormBuilder,
              private router: Router)
              {
                this.findForm = this.fb.group({
                  cdc: ['', Validators.required],
                  recaptcha: ['', Validators.required]
                  //password: ['', [Validators.required, Validators.minLength(6)]],
                });
              }

  ngOnInit(): void {
    this.siteKey = environment.captcha_site_key;
    console.log('siteKey', this.siteKey);
  }


  get cdc() {
    return this.findForm.get('cdc');
  }




  onFind() {
    console.log('Entra al find');
    if (!this.findForm.valid) {
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
