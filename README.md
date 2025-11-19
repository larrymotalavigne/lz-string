# @larrym/lz-string

LZ-based compression algorithm for JavaScript with full ESM (ECMAScript Modules) support.

This package is a modern ESM-compatible fork of the original [lz-string](https://github.com/pieroxy/lz-string) library by pieroxy, providing the same powerful compression capabilities with improved module support.

## Features

- Full ESM (ECMAScript Modules) support
- CommonJS compatibility for legacy projects
- TypeScript type definitions included
- Zero dependencies
- Works in Node.js and browsers
- Multiple compression formats (Base64, UTF-16, URI-safe, Uint8Array)

## Installation

```bash
npm install @larrym/lz-string
```

## Usage

### ESM (ECMAScript Modules)

```javascript
import { compress, decompress, compressToBase64, decompressFromBase64 } from '@larrym/lz-string';

// Basic compression
const compressed = compress('Hello, World!');
const decompressed = decompress(compressed);

// Base64 compression
const compressedB64 = compressToBase64('Hello, World!');
const decompressedB64 = decompressFromBase64(compressedB64);
```

### CommonJS

```javascript
const { compress, decompress } = require('@larrym/lz-string');

const compressed = compress('Hello, World!');
const decompressed = decompress(compressed);
```

### Default Import

```javascript
import LZString from '@larrym/lz-string';

const compressed = LZString.compress('Hello, World!');
const decompressed = LZString.decompress(compressed);
```

## API

### `compress(input: string): string`
Compresses a string and returns the compressed string.

### `decompress(compressed: string): string | null`
Decompresses a string compressed with `compress()`.

### `compressToBase64(input: string): string`
Compresses a string to a Base64 encoded string.

### `decompressFromBase64(input: string): string | null`
Decompresses a Base64 encoded string.

### `compressToUTF16(input: string): string`
Compresses a string to UTF-16 format.

### `decompressFromUTF16(compressed: string): string | null`
Decompresses a UTF-16 compressed string.

### `compressToEncodedURIComponent(input: string): string`
Compresses a string to a URI-safe format.

### `decompressFromEncodedURIComponent(input: string): string | null`
Decompresses a URI-safe compressed string.

### `compressToUint8Array(input: string): Uint8Array`
Compresses a string to a Uint8Array.

### `decompressFromUint8Array(compressed: Uint8Array): string | null`
Decompresses a Uint8Array.

## Browser Usage

You can use this package directly in modern browsers with ESM support:

```html
<script type="module">
  import { compress, decompress } from 'https://unpkg.com/@larrym/lz-string@1.0.0/src/lz-string.js';

  const compressed = compress('Hello, World!');
  console.log(compressed);

  const decompressed = decompress(compressed);
  console.log(decompressed);
</script>
```

## Differences from Original lz-string

- Native ESM support with proper `package.json` exports
- Maintained TypeScript definitions
- Modern JavaScript syntax (const/let instead of var)
- Simplified module structure

## License

MIT License - see LICENSE file for details

Original work Copyright (c) 2013 pieroxy
Modified work Copyright (c) 2025 Larry Motalavigne

## Credits

This package is based on the original [lz-string](https://github.com/pieroxy/lz-string) library by pieroxy.
