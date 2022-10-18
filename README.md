# octoherd-script-unlabel

> Remove labels from all issues of given repositories

[![@latest](https://img.shields.io/npm/v/octoherd-script-unlabel.svg)](https://www.npmjs.com/package/octoherd-script-unlabel)
[![Build Status](https://github.com/lyqht/octoherd-script-unlabel/workflows/Test/badge.svg)](https://github.com/lyqht/octoherd-script-unlabel/actions?query=workflow%3ATest+branch%3Amain)

## Usage

Minimal usage

```js
npx octoherd-script-unlabel \
        --repositories octoherd/*
```

Pass all options as CLI flags to avoid user prompts

```js
npx octoherd-script-unlabel \
  -T ghp_0123456789abcdefghjklmnopqrstuvwxyzA \
  -R "hacker123/*" \
  --labels help wanted,hacktoberfest
```

## Options

| option                       | type             | description                                                                                                                                                                                                                                         |
| ---------------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--labels`             | string           | **Required.** One or multiple comma-separated labels |
| `--octoherd-token`, `-T`     | string           | A personal access token ([create](https://github.com/settings/tokens/new?scopes=repo)). Script will create one if option is not set                                                                                                                 |
| `--octoherd-repos`, `-R`     | array of strings | One or multiple space-separated repositories in the form of `repo-owner/repo-name`. `repo-owner/*` will find all repositories for one owner. `*` will find all repositories the user has access to. Will prompt for repositories if not set         |
| `--octoherd-bypass-confirms` | boolean          | Bypass prompts to confirm mutating requests                                                                                                                                                                                                         |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## About Octoherd

[@octoherd](https://github.com/octoherd/) is project to help you keep your GitHub repositories in line.

## License

[ISC](LICENSE.md)
