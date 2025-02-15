# DeepGet

**DeepGet** is a lightweight and safe utility for retrieving values from deeply nested JavaScript objects
using dot and array notation. It ensures undefined safety, making object traversal hassle-free.
Say goodbye to complex conditional checks and errors — **DeepGet** simplifies object traversal with ease.

## Features

- **Dot notation support** – Access deep properties easily (`"a.b.c"`).
- **Array index notation** – Retrieve array elements (`"a.b.c[1]"`).
- **Custom Separator Support** - Use a custom separator instead of a single dot (`"."`).
- **Safe access** – Prevents errors and returns `undefined` if the key either is invalid or missing.
- **Lightweight** – No third-party dependencies, minimal footprint.

## Installation

```sh
npm install deepget
```

## Usage

### Import

#### CommonJS

```js
const { DeepGet } = require('deepget');
```

#### ES Module

```js
import DeepGet from 'deepget';
// Or: import { DeepGet } from 'deepget';
```

> TIP: For more simplicity naming purpose, you can do, for example:
> ```js
> import DeepGet as DG from 'deepget';
> ```

### Basic Usage

```js
const obj = { a: { b: { c: 42, $1: 1 } } };

console.log(DeepGet(obj, "a.b.c"));   // 42
console.log(DeepGet(obj, "a.b.$1"));  // 1
console.log(DeepGet(obj, "a.x.y"));   // undefined
```

### Array Index Notation

```js
const obj = { a: { b: { c: [10, 20, 30, [ 'foo' ]] } } };

console.log(DeepGet(obj, "a.b.c[1]"));     // 20
console.log(DeepGet(obj, "a.b.c[5]"));     // undefined
console.log(DeepGet(obj, "a.b.c[3][0]"));  // foo
```

### Using a Custom Separator

```js
const obj = { a: { b: { c: 42 } } };
console.log(DeepGet(obj, "a::b::c", { sep: "::" })); // 42
```

<!-- FIXME
## API

### `DeepGet(obj: object, key: string): any | undefined`

Retrieves a value from a nested object based on a dot notation key.

#### Parameters:
- **`obj`** *(object)* – The object to retrieve the value from.
- **`key`** *(string)* – The dot-notation key path.

#### Returns:
- The found value or `undefined` if the key does not exist or input is invalid.
-->

## Why Use DeepGet?

- **Prevents runtime errors**: No need for manual `if` checks.
- **Handles missing values gracefully**: Avoids `TypeError: Cannot read property ... of undefined`.
- **Intuitive dot and array notation**: Access nested data effortlessly, also support nested arrays.

## License

Licensed under the [MIT License](./LICENSE).
