---
id: typescript-config
sidebar_position: 5
---

# @actinc/typescript-config

A default set of typescript rules to be used by most applications.  
The typescript configuration inheritance process allows you to override any configuration.  
The ideal scenario is you need to change as little as possible.

## Installation

```bash
npm install @actinc/typescript-config
```

You can extend this base config

```json title:tsconfig.json lineNumbers
{
  "extends": "@actinc/typescript-config"
}
```
