export interface FormFields {
    codigo: string;
    title: string;
    valor_mayorista: number;
    pvp: number;
}



export interface TipoRespuestaServidor {
    variant?: string;
    show: boolean;
    created?: boolean;
    message?: string;
}

export interface DataProducto {
    _id: string | null;
    id: number;
    codigo: string;
    title: string;
    valor_mayorista: number;
    pvp: number;
}

export interface LoginData {
    userLoginForm : string;
    passwordLoginForm: string;
}