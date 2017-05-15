ember-simple-qrcode
============

A simple QR code component & npm's `qrcode` package shim.

This addon is a thin wrapper around [node-qrcode](https://github.com/soldair/node-qrcode) library.

Installation
------------

Run `ember install ember-simple-qrcode`.

Usage
------------

### Component
```hbs
{{qr-code content='Hello!'}}
{{qr-code content=false onError=myAwesomeErrorHandler}} {{!-- onError hook will be called in case an error occurs --}}
{{qr-code}} {{!-- no-op --}}
```

### ES module
In case you want to use the library directly, just import it:
 
```js
import QRCode from 'qrcode';
```

License
------------

This project is licensed under the [MIT License](LICENSE.md).
