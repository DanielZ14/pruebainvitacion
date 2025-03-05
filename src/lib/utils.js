// src/lib/utils.js (o similar)
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export async function getInvitadosData() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const csvPath = path.join(__dirname, '../../data/invitados.csv'); // Ajusta la ruta si es necesario
    const csvText = await fs.readFile(csvPath, 'utf-8');
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    const invitados = lines.slice(1).map(line => {
        const values = line.split(',');
        const obj = {};
        for (let i = 0; i < headers.length; i++) {
            obj[headers[i]] = values[i];
        }
        return obj;
    });
    return invitados;
}