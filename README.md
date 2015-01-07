# Mincer ECO

[ECO syntax](https://github.com/sstephenson/eco) transformation engine for [Mincer](https://github.com/nodeca/mincer).

## Installation

Install from npm registry:

```
$ npm install mincer-eco
```

or add `mincer-eco` to your `package.json`:

```json
"dependencies": {
  "mincer-eco": "0.0.4"
}
```


## Usage

```js
var Mincer = require('mincer');

require('mincer-eco')(Mincer);
```

Now files with `.eco` extension will be compiled to using `eco` to JavaScript.


## Running Tests

```
$ npm install --development
$ npm test
```

## Attribution Alex Kotliarskyi <alex.frantic@gmail.com> who provided [Mincer JSX](https://github.com/frantic/mincer-jsx) which this work was based upon

## License

The MIT License (MIT)

Copyright © 2014 Alex Kotliarskyi alex.frantic@gmail.com
Copyright © 2015 Tony Yates <tony.yates@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.