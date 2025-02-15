/**
 * This module provides utilities for handling locale-based translations.
 *
 * It includes functions to retrieve values from nested objects using dot notation keys
 * and to translate strings based on available locale files.
 *
 * @module    deepget
 * @author    Ryuu Mitsuki <https://github.com/mitsuki31>
 * @since     1.0.0
 * @license   MIT
 */

/**
 * The default separator used to split the key into parts.
 * @readonly
 * @default  '.'
 * @since    1.0.0
 * @public
 */
export const DEFAULT_SEP: '.' = '.';

function isPlainObject(x: any): x is object {
  return (
    (x !== null || typeof x !== 'undefined') &&
    typeof x === 'object' &&
    !Array.isArray(x) &&
    Object.prototype.toString &&
    /^\[object Object\]$/.test(Object.prototype.toString.call(x))
  );
}

/**
 * Retrieves a value from a nested object using a dot notation key.
 *
 * This function will never throws any error if there is a problem with the input type.
 *
 * @private
 * @param obj - The object from which the value is to be retrieved.
 * @param key - The key in dot notation representing the path to the value.
 * @param sep - The separator used to split the key into parts.
 *
 * @returns The value at the specified key if it exists,
 *          or `undefined` if the key is not found or an error occurs.
 * @since   1.0.0
 */
function getNestedValue(obj: { [key: string]: any }, key: string, sep?: string): any | undefined {
  if (!isPlainObject(obj) || typeof key !== 'string' || key.trim() === '') {
    return undefined;
  }

  sep = sep || DEFAULT_SEP;
  return key
    .replace(/\[(\d+)\]/g, `${sep}$1`)  // Convert array indices to dot notation
    .split(sep)
    .reduce((value, prop) => (value != null ? value[prop] : undefined), obj);
}

/**
 * Retrieves a value from a nested object using a dot notation key.
 *
 * This function will never throws any error if there is a problem with the input type.
 * It will return `undefined` instead. This also means that if the key is not found,
 * the function will return `undefined` instead of `null` especially when working on JSON data.
 * 
 * @public
 * @param obj - The object from which the value is to be retrieved.
 * @param key - The key in dot notation representing the path to the value.
 * @param options - Optional settings.
 * @param options.sep - Custom key separator (default: `'.'`).
 *
 * @returns The value at the specified key if it exists,
 *                or `undefined` if the key is not found or an error occurs.
 *
 * @example <caption>Simple object</caption>
 * const obj = { a: { b: { c: 42, d: { _: 'foo' } } } };
 * getValue(obj, 'a.b.d._');  // foo
 *
 * @example <caption>Array index notation</caption>
 * const obj = { a: { b: { c: [1, 2, 3] } } };
 * getValue(obj, 'a.b.c[1]');  // 2
 *
 * @since   1.0.0
 */
export function DeepGet(
  obj: { [key: string]: any },
  key: string,
  options?: { sep: string }
): any | undefined {
  if (!isPlainObject(obj) || typeof key !== 'string' || key.trim() === '') {
    return undefined;
  }

  const sep = options?.sep || DEFAULT_SEP;
  const value = getNestedValue(obj, key, sep);
  return value;
}
DeepGet.DEFAULT_SEP = DEFAULT_SEP;

export default DeepGet;
