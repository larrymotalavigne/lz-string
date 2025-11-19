/**
 * LZ-based compression algorithm
 *
 * @packageDocumentation
 */

/**
 * Compresses input to a Base64 string
 * @param input - The string to compress
 * @returns The compressed string in Base64 format
 */
export function compressToBase64(input: string | null): string;

/**
 * Decompresses a Base64 string
 * @param input - The Base64 compressed string
 * @returns The decompressed string or null if input is empty
 */
export function decompressFromBase64(input: string | null): string | null;

/**
 * Compresses input to UTF-16
 * @param input - The string to compress
 * @returns The compressed string in UTF-16 format
 */
export function compressToUTF16(input: string | null): string;

/**
 * Decompresses a UTF-16 string
 * @param compressed - The UTF-16 compressed string
 * @returns The decompressed string or null if input is empty
 */
export function decompressFromUTF16(compressed: string | null): string | null;

/**
 * Compresses input to a Uint8Array (UCS-2 big endian format)
 * @param uncompressed - The string to compress
 * @returns The compressed data as Uint8Array
 */
export function compressToUint8Array(uncompressed: string): Uint8Array;

/**
 * Decompresses from a Uint8Array (UCS-2 big endian format)
 * @param compressed - The compressed Uint8Array
 * @returns The decompressed string
 */
export function decompressFromUint8Array(compressed: Uint8Array | null | undefined): string | null;

/**
 * Compresses input to a URI encoded component string
 * @param input - The string to compress
 * @returns The compressed string that is URI-safe
 */
export function compressToEncodedURIComponent(input: string | null): string;

/**
 * Decompresses from a URI encoded component string
 * @param input - The URI-safe compressed string
 * @returns The decompressed string or null if input is empty
 */
export function decompressFromEncodedURIComponent(input: string | null): string | null;

/**
 * Compresses a string
 * @param uncompressed - The string to compress
 * @returns The compressed string
 */
export function compress(uncompressed: string): string;

/**
 * Decompresses a string
 * @param compressed - The compressed string
 * @returns The decompressed string or null if input is empty
 */
export function decompress(compressed: string | null): string | null;

/**
 * LZ-String namespace with all compression/decompression methods
 */
export interface LZString {
  compressToBase64: typeof compressToBase64;
  decompressFromBase64: typeof decompressFromBase64;
  compressToUTF16: typeof compressToUTF16;
  decompressFromUTF16: typeof decompressFromUTF16;
  compressToUint8Array: typeof compressToUint8Array;
  decompressFromUint8Array: typeof decompressFromUint8Array;
  compressToEncodedURIComponent: typeof compressToEncodedURIComponent;
  decompressFromEncodedURIComponent: typeof decompressFromEncodedURIComponent;
  compress: typeof compress;
  decompress: typeof decompress;
}

declare const _default: LZString;
export default _default;
