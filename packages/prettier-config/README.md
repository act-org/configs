---
id: prettier-config
sidebar_position: 3
---

# @actinc/prettier-config

A common set of prettier configuration values to be used by ACT projects.

## Installation

```bash
npm install --save-dev @actinc/prettier-config
```

### Usage

Add this to your package.json file
```json
"prettier": "@actinc/prettier-config",
```

OR

If you need more fine grained control

```bash
echo "module.exports = module.exports = {...require('@actinc/prettier-config')};" > .prettierrc.js
```
