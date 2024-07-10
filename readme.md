
# hcookie-manager

`hcookie-manager` is a versatile cookie management library that allows you to handle cookies efficiently across various programming languages.

## Installation

You can install `hcookie-manager` via npm:

```bash
npm install hcookie-manager
```

## Usage

### JavaScript

```javascript
const { CookieManager } = require('hcookie-manager');

const cookieManager = new CookieManager();
cookieManager.setCookie('myCookie', 'cookieValue');
console.log(cookieManager.getCookie('myCookie')); // Output: cookieValue
```

### TypeScript

```typescript
import { CookieManager } from 'hcookie-manager';

const cookieManager = new CookieManager();
cookieManager.setCookie('myCookie', 'cookieValue');
console.log(cookieManager.getCookie('myCookie')); // Output: cookieValue
```

## API

### `CookieManager` Class

#### `constructor()`

Initializes an instance of `CookieManager`.

#### `processCookies(cookies: string)`

Processes the provided string of cookies and stores them in the `cookies` object.

#### `readyCookies(): string`

Returns a string representation of all cookies ready for sending in HTTP headers.

#### `setCookie(name: string, value: string)`

Sets a cookie with the specified name and value.

#### `getCookie(name: string): string | undefined`

Returns the value of the cookie with the specified name, or `undefined` if not found.

## Supported Languages

`hcookie-manager` is designed to work seamlessly across the following programming languages:

- JavaScript
- TypeScript
- Python
- Java
- C#
- Ruby
- PHP
- Swift

Feel free to integrate `hcookie-manager` into your projects in any of these languages!

## License

This project is licensed under the MIT License - see the LICENSE file for details.