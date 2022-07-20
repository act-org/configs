import { Command, Flags } from '@oclif/core';
import { exec as execCallback } from 'node:child_process';
import { writeFile } from 'node:fs/promises';

export const exec = (command: string): Promise<string> => {
  // eslint-disable-next-line promise/avoid-new
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line promise/prefer-await-to-callbacks
    execCallback(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      }

      resolve(stdout);
    })
  })
}

export default class Prettier extends Command {
  static description = 'describe the command here'

  static examples = [
    'adds ACT eslint to a current working folder',
  ]

  static flags = {

    config: Flags.string({char: 'c', default: 'base', name: 'config'}),
    force: Flags.boolean({char: 'f'}),
  }

  static args = []

  public async run(): Promise<void> {
    const {flags} = await this.parse(Prettier)
    this.log('Installing the latest @actinc/eslint-config package')
    const result = await exec(`npm install -D @actinc/eslint-config@latest${flags.force ? ' --force' : ''}`)
    this.log(result )
    const eslint = `// automatically generated, it's best not to edit this file
module.exports = {
  extends: ["@actinc/eslint-config"]
};`
    await writeFile('./.eslintrc.js', eslint)
  }
}
