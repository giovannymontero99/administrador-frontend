import { FormFields, TipoRespuestaServidor } from "../interfaces/interfaces";

export const valoresInicialesFormularioProducto : FormFields = {
    productoCodigo : "",
    productoNombre : "",
    productoValorNeto: 0,
    productoValorVenta: 0
}

export const valoresInicialesRepuestaServer : TipoRespuestaServidor = {
    variant: '',
    show: false,
    created: false,
    message: ''
}