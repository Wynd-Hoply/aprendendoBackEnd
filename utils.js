// Aula 02: Módulo de utilidade em ESM
//  EXPORT NOMEADO

export function formatLog(mensagem) {
    const data = new Date()
        .toISOString().slice(0, 10);
        return `[${data}] - ${mensagem}`;
}