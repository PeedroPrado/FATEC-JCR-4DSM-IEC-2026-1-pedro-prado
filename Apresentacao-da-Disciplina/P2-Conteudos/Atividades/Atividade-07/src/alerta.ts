export function classificarAlerta(valor: number): string {
    if (valor >= 90) return "Crítico";
    if (valor >= 70) return "Alto";
    if (valor >= 50) return "Médio";

    return "Baixo";
}