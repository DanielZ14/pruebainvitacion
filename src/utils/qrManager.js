import fs from 'node:fs';
import path from 'node:path';

export async function getInvitedQRCodes(invitedId) {
  const qrDirectory = path.join(process.cwd(), 'public', 'qr', invitedId);
  
  try {
    const files = await fs.promises.readdir(qrDirectory);
    return files
      .filter(file => file.endsWith('.png'))
      .sort((a, b) => parseInt(a) - parseInt(b));
  } catch (error) {
    return [];
  }
}
