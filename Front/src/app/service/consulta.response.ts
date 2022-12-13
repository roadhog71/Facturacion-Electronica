import { Documento } from "./documento.model";

export interface ConsultaResponse{
  cantidadResultados: number;
  cantidadTotalResultados: number;
  documento: Documento[];
}
