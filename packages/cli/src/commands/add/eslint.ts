import { Command, Flags } from '@oclif/core';
import { writeFile } from 'node:fs/promises';
import { npminstall } from '../../utils/npminstall';
import { updatepackage } from '../../utils/updatepackage';

enum Mode {
  package = 'package',
  file = 'file'
};
type Modes = keyof typeof Mode;

enum Config {
  nest = 'nest',
  react = 'react',
  base = 'base',
  typescript = 'typescript'
}
type Configs = keyof typeof Config;

export default class Eslint extends Command {
  static description = 'Add ESLint to the current project'

  static examples = [
    '@actinc/config add eslint -c react',
  ]

  static flags = {
    config: Flags.string({ char: 'c', default: 'base', name: 'config', options: ['nest', 'react', 'base', 'typescript'] }),
    mode: Flags.string({ char: 'm', default: 'package', name: 'mode', options: ['package', 'file'] }),
    force: Flags.boolean({ char: 'f' }),
  }

  static args = [];

  /**
   * Main work method to write the various eslint configs
   * @param mode
   * @param config
   */
  private async writeEslint(mode: Modes, config: Configs) {
    const eslintconfig = {
      extends: [`plugin:@actinc/${config}`],
      plugins: [`@actinc`]
    }
    const prettierconfig = "@actinc/pretter-config";
    const eslintfileconfig = `// automatically generated, it's best not to edit this file
module.exports = ${JSON.stringify(eslintconfig, null, 2)};`;
    const eslintignoretemplate = `node_modules
dist
build
`;
    const prettierfileconfig = `module.exports = {
  ...require("${prettierconfig}"),
  semi: false,
};`
    await writeFile('./.eslintignore', eslintignoretemplate);
    if (mode === Mode.file) {
      await writeFile('./.eslintrc.js', eslintfileconfig);
      await writeFile('./.prettierrc.js', prettierfileconfig);
    } else {
      await updatepackage({ key: 'eslintConfig', value: eslintconfig }, { key: 'prettier', value: "@actinc/pretter-config" });
    }
  }

  /**
   * Run the command
   */
  public async run(): Promise<void> {
    const { flags } = await this.parse(Eslint);
    try {
      const installOutput = await npminstall('@actinc/eslint-plugin@latest', '@actinc/prettier-config@latest', 'eslint', 'prettier');
      this.log(installOutput);
      await this.writeEslint(flags.mode as Modes, flags.config as Configs);
      this.log('done');
    } catch (error) {
      this.error(JSON.stringify(error, null, 2));
    }
  }
}
