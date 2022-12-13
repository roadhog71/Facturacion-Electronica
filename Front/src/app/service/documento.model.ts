import { DocumentoError } from "./documento.error.model";

export interface Documento{
  id: number;
  cdc: string;
  numero: number;
  tipoDocumento: number;
  timbrado: number;
  establecimiento: number;
  puntoExpedicion: number;
  numeroSerie: string;
  fechaIngreso: Date;
  fechaEmision: Date;
  estado: string;
  estadoEnvio: string;
  estadoAnulacion: string;
  secuencia: number;
  kuDE: any[];
  xmlFirmado: any[];
  documentosError: DocumentoError[];
}
