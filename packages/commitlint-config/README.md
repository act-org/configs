---
id: commitlint-config
sidebar_position: 4
---

# @actinc/commitlint-config

This is the standard configuration for the [commitlint](https://commitlint.js.org/) tool.  This works in conjunction with a git commit hook tool like [husky](https://typicode.github.io/husky/#/).

The configuration is based on [conventional-commits](https://www.conventionalcommits.org/) with ACT specific rules configured.

## Installation

```bash
npm install --save-dev @actinc/commitlint-config
```

## Configuration

The easiest way to register this configuration is by adding a setting to the package.json file.

```json

// package.json
{
  // ... other settings
  "commitlint": {"extends": ["@actinc"]},
}
```

Alternatively, you can install the configuration be creating a commitlint configuration file in the root of your source code.

```bash
echo "module.exports = {extends: ['@actinc']}" > commitlint.config.js
```
