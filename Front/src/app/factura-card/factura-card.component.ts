import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ConsultaResponse } from '../service/consulta.response';

@Component({
  selector: 'app-factura-card',
  templateUrl: './factura-card.component.html',
  styleUrls: ['./factura-card.component.css']
})
export class FacturaCardComponent implements OnInit {
  route: ActivatedRoute;
  consultaResponse: any;
  constructor(private router: Router,
                      route: ActivatedRoute) {
      this.route = route  }

  ngOnInit(): void {
    let consultaResponse:any = JSON.parse(this.route.snapshot.params['response']);
    this.consultaResponse = consultaResponse as ConsultaResponse;
    console.log('response', this.consultaResponse);
  }



}
