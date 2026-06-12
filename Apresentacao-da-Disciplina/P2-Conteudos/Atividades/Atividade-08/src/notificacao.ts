import { classificarAlerta } from "./alerta";

export function enviarNotificacao(alerta: string): string {
    return `Notificação enviada: ${alerta}`;
}

export function processarAlerta(valor: number): string {
    const alerta = classificarAlerta(valor);
    return enviarNotificacao(alerta);
}