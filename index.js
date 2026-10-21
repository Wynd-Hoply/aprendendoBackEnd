// Aula 02: Atividade Prática - Organizador de Logs
// Demonstra import/export (ESM) e fs e path.

// Importa FS, PATH E FORMAT LOG (PARA RECEBER A FUNÇÃO DE PEGAR A DATA).
import fs from 'fs';
import path from 'path';
import {formatLog} from './utils.js';

// Cria uma constante para entre/esteja na pasta logs (utilizando process.cwd para ir na raiz) 
const pastaLogs = path.join(process.cwd(), 'logs');
// Cria uma constante que entre/esteja no arquivo system.log dentro da pasta logs (via constante pastaLogs)
const arquivoLog = path.join(pastaLogs, 'system.log');

// Se a pasta logs não existir, criar ela e mostrar no console.
if (!fs.existsSync(pastaLogs)) {
    fs.mkdirSync(pastaLogs);
    console.log('Pasta logs/ criada.');
}

// Cria a constante puxando a função format log com um parametro (sendo uma string de texto.)
const mensagem = formatLog('Sistema iniciado com sucesso.');
// Escreve no 'arquivoLog' a "mensagem"
fs.writeFileSync(arquivoLog, mensagem + '\n');

// mostra no terminal
console.log('Log salvo em', arquivoLog);
console.log('Conteúdo:', mensagem)