import { NumeroTipoDocumento } from "./numero.tipo.documento";

export interface ConsultaRequest{
  cdc: String[] ;
  maximoResultados: number;
  retornarKuDE: boolean;
  retornarXmlFirmado: boolean;
}
