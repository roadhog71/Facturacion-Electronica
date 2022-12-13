import { NumeroTipoDocumento } from "./numero.tipo.documento";

export interface ConsultaRequest{
  id: number[];
  cdc: String[] ;
  numeroTipoDocumento: NumeroTipoDocumento[];
  fechaEmisionDesde: Date;
  fechaEmisionHasta: Date;
  fechaIngresoDesde: Date;
  fechaIngresoHasta: Date;
  maximoResultados: number;
  resultadoInicial: number;
  retornarKuDE: boolean;
  timbrado: number;
  retornarXmlFirmado: boolean;
  establecimiento: number;
  puntoExpedicion: number;
  naturalezaReceptor: number;
  numeroDocumento: number;
  ruc: number;
  dv: number;
  apikey: string;
  usuario: string;

}
