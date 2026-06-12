import { classificarAlerta } from "./alerta";

export function enviarNotificacao(nivel: string): string {
    return `Notificação enviada: ${nivel}`;
}

export function processarAlerta(valor: number): string {
    const nivel = classificarAlerta(valor);
    return enviarNotificacao(nivel);
}