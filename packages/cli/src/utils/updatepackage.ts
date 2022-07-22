import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

type UpdateType = {key: string, value: any}

export const updatepackage = async (...updates: UpdateType[]): Promise<void> => {
  const existingPackage = await readFile(resolve(process.cwd(), 'package.json'), 'utf-8');
  const existingPackageJson = JSON.parse(existingPackage);
  updates.forEach((update) => {
    existingPackageJson[update.key] = update.value;
  })

  await writeFile(resolve(process.cwd(), 'package.json'), JSON.stringify(existingPackageJson, null, 2));
}
