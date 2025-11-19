# npm Trusted Publishing Setup Guide

This guide explains how to set up npm trusted publishing for the @larrym/lz-string package using GitHub Actions OIDC tokens.

## What is npm Trusted Publishing?

npm trusted publishing allows you to publish packages to npm directly from GitHub Actions without storing long-lived npm tokens as secrets. It uses OpenID Connect (OIDC) tokens to authenticate.

## Setup Steps

### 1. Configure npm Trusted Publisher

1. Log in to [npmjs.com](https://www.npmjs.com/)
2. Go to your account settings
3. Navigate to the "Publishing" or "Access Tokens" section
4. Look for "Trusted Publishers" or "OIDC Token"
5. Add a new trusted publisher with these details:
   - **Provider**: GitHub
   - **Organization/User**: `larrymotalavigne`
   - **Repository**: `lz-string`
   - **Workflow**: `.github/workflows/publish.yml`
   - **Environment**: (leave empty or specify if you want)

### 2. Alternative: Using NPM_TOKEN Secret (Traditional Method)

If you prefer the traditional method or if trusted publishing is not available:

1. Generate an Automation token on npmjs.com:
   - Go to Access Tokens in your npm account
   - Click "Generate New Token"
   - Select "Automation" type
   - Copy the token

2. Add the token to GitHub Secrets:
   - Go to your GitHub repository settings
   - Navigate to "Secrets and variables" → "Actions"
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: paste your npm token
   - Click "Add secret"

## Publishing Your Package

### Method 1: Manual Workflow Dispatch

1. Go to the "Actions" tab in your GitHub repository
2. Select the "Publish to npm" workflow
3. Click "Run workflow"
4. Optionally specify a version (e.g., "1.0.0", "1.0.1", "patch", "minor", "major")
5. Click "Run workflow"

### Method 2: Create a GitHub Release

1. Go to the "Releases" section of your repository
2. Click "Draft a new release"
3. Create a new tag (e.g., "v1.0.0")
4. Fill in release title and description
5. Click "Publish release"
6. The publish workflow will automatically run

## Workflow Features

The publish workflow includes:
- Automatic dependency installation
- Test execution before publishing
- Version management (if specified)
- Provenance generation (`--provenance` flag)
- Public access configuration

## Testing Before Publishing

Always run tests locally before publishing:

```bash
npm test
```

All tests should pass before publishing.

## Package Information

- **Package name**: `@larrym/lz-string`
- **Scope**: `@larrym`
- **Access**: Public
- **Main formats**: ESM and CommonJS
- **Node.js requirement**: >=18.0.0

## Verifying the Package

After publishing, you can verify:

1. Check on npm: https://www.npmjs.com/package/@larrym/lz-string
2. Install in a test project:
   ```bash
   npm install @larrym/lz-string
   ```
3. Test the import:
   ```javascript
   // ESM
   import { compress, decompress } from '@larrym/lz-string';

   // CommonJS
   const { compress, decompress } = require('@larrym/lz-string');
   ```

## Troubleshooting

### Publishing Fails with 403 Error

- Check that your npm account has the correct permissions
- Verify the package name is correct and available
- Ensure you're authenticated (if using NPM_TOKEN method)

### Tests Fail

- Run `npm test` locally to identify issues
- Check Node.js version compatibility
- Review test output for specific errors

### Workflow Not Triggering

- Ensure the branch name starts with 'claude/' for automatic testing
- Check that the workflow file is in the correct location: `.github/workflows/publish.yml`
- Verify GitHub Actions is enabled for the repository

## Documentation

For more information:
- [npm Trusted Publishers Documentation](https://docs.npmjs.com/trusted-publishers)
- [GitHub Actions OIDC Documentation](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
- [Package README](./README.md)
