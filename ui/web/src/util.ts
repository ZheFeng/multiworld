import sha256 from 'crypto-js/sha256';

export function hash(message: string): string {
    return sha256(message).toString();
}

export function randomString(length: number): string {
    const result: string[] = [];
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      const char = characters.charAt(Math.floor(Math.random() * charactersLength));
      result.push(char);
   }
   return result.join('');
}