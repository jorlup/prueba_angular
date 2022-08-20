export interface User {
    id: number;
    nombre: string;
    apellido: string;
    edad: number;
    sexo: string;
    embarazo_lactancia: boolean;
    fecha_nacimiento: Date;
    teléfono: string;
}

export interface Registro {
    nombre: string | null | undefined;
    apellido: string | null | undefined;
    edad: number | null | undefined;
    sexo: string | null | undefined;
    embarazo_lactancia: boolean | null | undefined;
    fecha_nacimiento: Date | null | undefined;
    teléfono: string | null | undefined;
}
