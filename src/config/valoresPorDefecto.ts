import { DataProducto, FormFields, TipoRespuestaServidor } from "../interfaces/interfaces";

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

export const defaultValueDataServer : DataProducto[] = [ {
    prodcuto_pvp : '',
    producto_codigo: '',
    producto_nombre: '',
    producto_producto: 0,
    producto_valor: ''
} ];