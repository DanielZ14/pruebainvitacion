export function validateHash(hash, id) {
    const secret = process.env.SECRET_KEY;
    const expectedHash = Buffer.from(`${id}${secret}`).toString('base64');
    return hash === expectedHash;
  }