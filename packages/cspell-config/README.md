---
id: cspell-config
sidebar_position: 7
---

# @actinc/cspell-config

A common set of cspell configurations and ACT specific dictionaries

## Installation

```bash
npm install --save-dev @actinc/cspell-config
```

### Usage

Add this to your package.json file
```json
"cspell": {
  "language": "en",
  "import": [
    "@actinc/cspell-config"
  ]
}
```

OR

Create a cspell.json file in the root of your directory with the following content

```json
"cspell": {
  "language": "en",
  "import": [
    "@actinc/cspell-config"
  ]
}
