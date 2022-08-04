---
id: eslint-plugin
sidebar_position: 2
---

# @actinc/eslint-plugin

This serves as a plugin to store the variety of pre-configured ACT eslint plugins and rules used for projects.  
This is organized as a plugin to enable the current and upcoming requirement of ESLint to only load additional plugins from plugins.  
This way, you only need to have eslint and prettier installed as peer dependencies.

## Installation
```bash
npm i -D @actinc/eslint-plugin @actinc/prettier-config @actinc/cspell-config eslint prettier
```

## Configuration
The easiest way is to add this to your package.json file

```json
"cspell": {
  "language": "en",
  "import": [
    "@actinc/cspell-config"
  ] 
} 
"prettier": "@actinc/prettier-config",
"eslintConfig": {
  "extends": [
    "plugin:@actinc/react"
  ],
  "plugins": [
    "@actinc"
  ]
}
  ```

If you need more sophisticated customization options, you can instead put this into an .eslintrc.js and/or .prettierrc.js file or whatever supported configuration file you prefer.

```bash
echo "module.exports = {extends: ['plugin:@actinc/react']}" > .eslintrc.js
echo "module.exports = module.exports = {...require('@actinc/prettier-config')};" > .prettierrc.js

```

### Configuration Options

These are the current supported configuration options available

1. plugin:@actinc/base - This is the base definition that includes most of the basic and some extended eslint rules.  This is intended for vanilla javascript
2. plugin:@actinc/typescript - This is intended for basic plain typescript projects and utilities, it extends base
3. plugin:@actinc/nest - This is intended for NestJS Projects.  It extends typescript
4. plugin:@actinc/react - This is for all react projects.  It extends typescript
