export interface FormFields {
    productoCodigo: string;
    productoNombre: string;
    productoValorNeto: number;
    productoValorVenta: number;
}



export interface TipoRespuestaServidor {
    variant?: string;
    show: boolean;
    created?: boolean;
    message?: string;
}