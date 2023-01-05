import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector:'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

}
