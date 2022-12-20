import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ConsultaResponse } from '../service/consulta.response';
import { Documento } from '../service/documento.model';
import { EfacturaService } from '../service/efactura.service';

@Component({
  selector: 'app-factura-card',
  templateUrl: './factura-card.component.html',
  styleUrls: ['./factura-card.component.css']
})
export class FacturaCardComponent implements OnInit {
  route: ActivatedRoute;
  consultaResponse: any;
  cdc: string = '';
  documento: any;
  constructor(private router: Router,
                      route: ActivatedRoute,
                      private service: EfacturaService) {
      this.route = route;}

  ngOnInit(): void {
    this.findAll();
    //let consultaResponse:any = JSON.parse(this.route.snapshot.params['response']);
    //this.consultaResponse = consultaResponse as ConsultaResponse;
    //console.log('response', this.consultaResponse);
  }

  findAll(){
    //this.cdc =  this.route.snapshot.paramMap.get('cdc') as string;
    this.cdc =  this.route.snapshot.params['cdc'];
    console.log('cdc:', this.cdc);
    let consultaRequest = { cdc: [this.cdc],
      maximoResultados: 1,
      retornarKuDE: true,
      retornarXmlFirmado: true
    }

    console.log(consultaRequest);

    this.service.findAll(consultaRequest).subscribe((
    data: any) => {
    this.consultaResponse = data as ConsultaResponse;
    this.documento = this.consultaResponse['documento'] as Documento;
    console.log(this.consultaResponse);

    });
  }

  downloadPdf(base64String:any, fileName:string){

      // Download PDF in Chrome etc.
      const source = `data:application/pdf;base64,${base64String}`;
      const link = document.createElement("a");
      link.href = source;
      link.download = `${fileName}.pdf`
      link.click();

  }

  downloadXml(data:any){
    let fileName = 'efactura';
    const source = `data:application/xml;base64,${data}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.xml`
    link.click();

    /*const link = document.createElement('a');
    var blob = new Blob([data], {
      type: 'xml'
    });
    var url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', 'efactura.xml');
    document.body.appendChild(link);
    link.click();*/

}


  onClickDownloadPdf(){

    let base64String =  this.documento[0].kuDE;
    console.log('kude', base64String)
    this.downloadPdf(base64String,"efactura");
  }

  onClickDownloadXml(){
    let data =  this.documento[0].xmlFirmado;
    console.log('xmlFirmado', data)
    this.downloadXml(data);
  }


}
