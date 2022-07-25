---
id: config
sidebar_position: 7
---

@actinc/config
=================

@actinc/config commands

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @actinc/config
$ config COMMAND
running command...
$ config (--version)
@actinc/config/1.0.0 linux-x64 node-v16.15.1
$ config --help [COMMAND]
USAGE
  $ config COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`config add eslint`](#config-add-eslint)
* [`config add prettier`](#config-add-prettier)
* [`config help [COMMAND]`](#config-help-command)
* [`config plugins`](#config-plugins)
* [`config plugins:install PLUGIN...`](#config-pluginsinstall-plugin)
* [`config plugins:inspect PLUGIN...`](#config-pluginsinspect-plugin)
* [`config plugins:install PLUGIN...`](#config-pluginsinstall-plugin-1)
* [`config plugins:link PLUGIN`](#config-pluginslink-plugin)
* [`config plugins:uninstall PLUGIN...`](#config-pluginsuninstall-plugin)
* [`config plugins:uninstall PLUGIN...`](#config-pluginsuninstall-plugin-1)
* [`config plugins:uninstall PLUGIN...`](#config-pluginsuninstall-plugin-2)
* [`config plugins update`](#config-plugins-update)

## `config add eslint`

Add ESLint to the current project

```
USAGE
  $ config add eslint [-c nest|react|base] [-f]

FLAGS
  -c, --config=<option>  [default: base]
                         <options: nest|react|base>
  -f, --force

DESCRIPTION
  Add ESLint to the current project

EXAMPLES
  @actinc/config add eslint -c react
```

## `config add prettier`

describe the command here

```
USAGE
  $ config add prettier [-c <value>] [-f]

FLAGS
  -c, --config=<value>  [default: base]
  -f, --force

DESCRIPTION
  describe the command here

EXAMPLES
  adds ACT eslint to a current working folder
```

## `config help [COMMAND]`

Display help for config.

```
USAGE
  $ config help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for config.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `config plugins`

List installed plugins.

```
USAGE
  $ config plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ config plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `config plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ config plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ config plugins add

EXAMPLES
  $ config plugins:install myplugin 

  $ config plugins:install https://github.com/someuser/someplugin

  $ config plugins:install someuser/someplugin
```

## `config plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ config plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ config plugins:inspect myplugin
```

## `config plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ config plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ config plugins add

EXAMPLES
  $ config plugins:install myplugin 

  $ config plugins:install https://github.com/someuser/someplugin

  $ config plugins:install someuser/someplugin
```

## `config plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ config plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ config plugins:link myplugin
```

## `config plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ config plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ config plugins unlink
  $ config plugins remove
```

## `config plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ config plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ config plugins unlink
  $ config plugins remove
```

## `config plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ config plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ config plugins unlink
  $ config plugins remove
```

## `config plugins update`

Update installed plugins.

```
USAGE
  $ config plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
