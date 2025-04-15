# ⚙️ Config Folder

Environment-specific configuration files for your project.

- `development.js`: Settings for development.
- `production.js`: Settings for production.

Use the config loader in `src/configLoader.js` to automatically pick the right config based on `NODE_ENV`.
