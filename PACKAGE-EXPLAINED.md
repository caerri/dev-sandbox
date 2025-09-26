# Package.json Explained

This file explains every part of your `package.json` for learning purposes.

## Basic Information
- **`name`**: "dev-sandbox" - Project name, used for npm registry and folder identification
- **`version`**: "1.0.0" - Semantic versioning: major.minor.patch
- **`description`**: Brief project description shown in npm search
- **`main`**: "dist/app.js" - Entry point file when someone imports your package
- **`type`**: "commonjs" - Module system (commonjs uses require/module.exports vs ESModules)

## Scripts (Run with `npm run <script-name>`)
- **`dev`**: "nodemon --exec ts-node src/app.ts"
  - Development mode - auto-restart on file changes, runs TypeScript directly
- **`build`**: "tsc" 
  - Compile TypeScript to JavaScript in dist/ folder
- **`start`**: "node dist/app.js"
  - Production mode - runs compiled JavaScript
- **`test`**: Placeholder for future tests

## Metadata
- **`keywords`**: ["node", "typescript", "express", "developer-hub", "learning"]
  - NPM search keywords
- **`author`**: "carriesnow" - Package author
- **`license`**: "ISC" - Open source license type

## Development Dependencies (devDependencies)
*Packages only needed during development - not installed in production*

- **`@types/express`**: TypeScript type definitions for Express
- **`@types/node`**: TypeScript type definitions for Node.js
- **`nodemon`**: Automatically restart server when files change
- **`ts-node`**: Run TypeScript files directly without compiling first
- **`typescript`**: TypeScript compiler

## Production Dependencies (dependencies)
*Packages needed in production - installed when deployed*

- **`cors`**: Cross-Origin Resource Sharing - allows requests from different domains
- **`dotenv`**: Load environment variables from .env file
- **`express`**: Web framework for Node.js - handles routing and HTTP
- **`helmet`**: Security middleware - adds protective HTTP headers
- **`morgan`**: HTTP request logging middleware

## Version Numbers Explained
- **`^5.0.3`**: Compatible with version 5.0.3 and newer minor/patch versions (5.1.0, 5.0.4) but not 6.0.0
- **Semantic Versioning**: MAJOR.MINOR.PATCH
  - MAJOR: Breaking changes
  - MINOR: New features (backwards compatible)
  - PATCH: Bug fixes

---

# TypeScript Configuration (tsconfig.json) Explained

## Basic Configuration
- **`target`**: "es2024" - What version of JavaScript to output after compilation
- **`module`**: "commonjs" - How to handle imports/exports (Node.js style)
- **`outDir`**: "./dist" - Where to put compiled JavaScript files
- **`rootDir`**: "./src" - Where your TypeScript source files live

## Type Checking Options
- **`strict`**: true - Enable strict type checking (catches more bugs)
- **`esModuleInterop`**: true - Allows modern import syntax with CommonJS modules
- **`skipLibCheck`**: true - Don't type-check library files (faster compilation)
- **`forceConsistentCasingInFileNames`**: true - File names must match exactly
- **`resolveJsonModule`**: true - Allows importing JSON files directly

## File Inclusion
- **`include`**: ["src/**/*"] - Which files TO compile (everything in src/)
- **`exclude`**: ["node_modules", "dist"] - Which files NOT to compile

## Why These Settings?
- **ES2024**: Modern JavaScript features while maintaining compatibility
- **CommonJS**: Works well with Node.js and most npm packages
- **Strict mode**: Helps catch errors early during development
- **Separate dist folder**: Keeps compiled JavaScript separate from source TypeScript