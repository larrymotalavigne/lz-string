import { test } from 'node:test';
import assert from 'node:assert';
import {
  compress,
  decompress,
  compressToBase64,
  decompressFromBase64,
  compressToUTF16,
  decompressFromUTF16,
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
  compressToUint8Array,
  decompressFromUint8Array
} from '../src/lz-string.js';

test('compress and decompress', () => {
  const original = 'Hello, World! This is a test string for compression.';
  const compressed = compress(original);
  const decompressed = decompress(compressed);
  assert.strictEqual(decompressed, original);
});

test('compressToBase64 and decompressFromBase64', () => {
  const original = 'Hello, World!';
  const compressed = compressToBase64(original);
  const decompressed = decompressFromBase64(compressed);
  assert.strictEqual(decompressed, original);
});

test('compressToUTF16 and decompressFromUTF16', () => {
  const original = 'Hello, World!';
  const compressed = compressToUTF16(original);
  const decompressed = decompressFromUTF16(compressed);
  assert.strictEqual(decompressed, original);
});

test('compressToEncodedURIComponent and decompressFromEncodedURIComponent', () => {
  const original = 'Hello, World!';
  const compressed = compressToEncodedURIComponent(original);
  const decompressed = decompressFromEncodedURIComponent(compressed);
  assert.strictEqual(decompressed, original);
});

test('compressToUint8Array and decompressFromUint8Array', () => {
  const original = 'Hello, World!';
  const compressed = compressToUint8Array(original);
  assert.ok(compressed instanceof Uint8Array);
  const decompressed = decompressFromUint8Array(compressed);
  assert.strictEqual(decompressed, original);
});

test('compress handles null input', () => {
  const result = compress(null);
  assert.strictEqual(result, '');
});

test('decompress handles empty string', () => {
  const result = decompress('');
  assert.strictEqual(result, null);
});

test('large text compression', () => {
  const original = 'Lorem ipsum dolor sit amet, '.repeat(100);
  const compressed = compress(original);
  const decompressed = decompress(compressed);
  assert.strictEqual(decompressed, original);
  // Check that compression actually reduces size
  assert.ok(compressed.length < original.length);
});

test('special characters', () => {
  const original = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  const compressed = compress(original);
  const decompressed = decompress(compressed);
  assert.strictEqual(decompressed, original);
});

test('unicode characters', () => {
  const original = '你好世界 🌍 Привет мир';
  const compressed = compress(original);
  const decompressed = decompress(compressed);
  assert.strictEqual(decompressed, original);
});
