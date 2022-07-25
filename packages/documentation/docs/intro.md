---
id: intro
title: Configuration Suite
sidebar_position: 1
---

# ACT, Inc. Configuration Suite

This collection of packages are for organizing the various Node based project tools and configurations as well as a CLI tool for adopting this configuration setup quickly.

## Getting Started

The easiest way is the run the CLI tool to setup your project.  This CLI tool does make changes to your project configuration, so be sure that you are operating on a clean unchanged repository or 
on a working directory where it doesn't matter.

```bash
npx @actinc/configs add all
```

### Local Development

Clone the repository and run.  

```bash
npm install
```

This will setup everything required including lerna bootstrap and husky configuration.  There are pre-commit and commit-msg hooks to make sure that
the suite of tests are run before each check in and the conventional-commits format is followed for all commit messages.

To submit any updates, please issue a pull request.
