import { classificarAlerta } from "../src/alerta";
import { enviarNotificacao } from "../src/notificacao";

test("classificação + notificação", () => {
    const alerta = classificarAlerta(90);

    const resultado = enviarNotificacao(alerta);

    expect(resultado).toBe("Notificação enviada: Crítico");
});