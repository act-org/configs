import { exec } from './exec';

export const npminstall = async (...packages: string[]): Promise<string> => {
  const result = await exec(`npm install -D ${packages.join(' ')}`);
  return result;
}
