import { Command, Flags } from '@oclif/core';
import { exec as execCallback } from 'node:child_process';
import { writeFile } from 'node:fs/promises';
import { npminstall } from '../../utils/npminstall';

export const exec = (command: string): Promise<string> => {
  // eslint-disable-next-line promise/avoid-new
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line promise/prefer-await-to-callbacks
    execCallback(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr)
      }

      resolve(stdout)
    })
  })
};

export default class Eslint extends Command {
  static description = 'Add ESLint to the current project'

  static examples = [
    '@actinc/config add eslint -c react',
  ]

  static flags = {

    config: Flags.string({char: 'c', default: 'base', name: 'config', options: ['nest', 'react', 'base']}),
    force: Flags.boolean({char: 'f'}),
  }

  static args = [];

  public async run(): Promise<void> {
    const {flags} = await this.parse(Eslint)
    this.log('Installing the latest @actinc/prettier-config package')
    await npminstall('@typescript-eslint/eslint-plugin', '@typescript-eslint/parser', 'eslint-config-prettier', 'eslint-config-airbnb', 'eslint-plugin-disable', 'eslint-plugin-filenames', 'eslint-plugin-import', 'eslint-plugin-jest', 'eslint-plugin-jsx-a11y', 'eslint-plugin-lodash', 'eslint-plugin-new-with-error', 'eslint-plugin-no-loops', 'eslint-plugin-prettier', 'eslint-plugin-promise', 'eslint-plugin-react', 'eslint-plugin-react-hooks', 'eslint-plugin-security', 'prettier')
    const result = await exec(`npm install -D @actinc/eslint-config@latest${flags.force ? ' --force' : ''}`)
    this.log(result)
    const template = `// automatically generated, it's best not to edit this file
module.exports = {
  extends: ["@actinc/eslint-config/${flags.config}"]
};`
    await writeFile('./.eslintrc.js', template)
  }
}
