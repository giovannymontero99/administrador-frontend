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

export interface DataProducto { 
    producto_producto: number; 
    producto_codigo: string, 
    producto_nombre:string, 
    prodcuto_pvp: string ,
    producto_valor: string
}