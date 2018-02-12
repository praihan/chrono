export function assert(condition: boolean, message?: string): void {
  if (!condition) {
    throw TypeError(message ? `Assertion failed: ${message}`: 'Assertion failed');
  }
}
