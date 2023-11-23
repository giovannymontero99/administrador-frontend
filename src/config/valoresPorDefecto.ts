import { DataProducto, FormFields, TipoRespuestaServidor } from "../interfaces/interfaces";

export const valoresInicialesFormularioProducto : FormFields = {
    codigo : "",
    title : "",
    valor_mayorista: 0,
    pvp: 0
}

export const valoresInicialesRepuestaServer : TipoRespuestaServidor = {
    variant: '',
    show: false,
    created: false,
    message: ''
}

export const defaultValueDataServer : DataProducto[] = [ {
    _id: null,
    id : 0,
    codigo : '',
    title : '',
    valor_mayorista : 0,
    pvp : 0
} ];