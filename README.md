# Agent Globe Phosphor (VS Code theme)

Retro phosphor-green CRT colour theme for VS Code, matching the Agent Globe visualizer: near-black
green editor, phosphor text, amber keywords, pale-green strings and types, red only for errors.
Terminal ANSI palette, git decorations, diffs, status bar, tabs and inputs are all restyled.

## Install

From a release package:

```
npx @vscode/vsce package --allow-missing-repository -o phosphor.vsix
code --install-extension phosphor.vsix
```

Then pick **Agent Globe Phosphor** in `Ctrl+K Ctrl+T`, or set in settings:

```json
"workbench.colorTheme": "Agent Globe Phosphor"
```

For development, symlink or copy this folder into `~/.vscode/extensions/` and reload the window.

## Layout

```
package.json                     extension manifest (contributes.themes)
themes/phosphor-color-theme.json workbench colours, TextMate token colours, semantic token colours
```

## License

MIT. Colours are shared with the Agent Globe app.
