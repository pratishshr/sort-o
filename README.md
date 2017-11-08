# sort-o 
[![npm](https://img.shields.io/npm/v/sort-o.svg)](https://www.npmjs.com/package/chai-exclude)
[![Build Status](https://travis-ci.org/pratishshr/sort-o.svg?branch=master)](https://travis-ci.org/pratishshr/sort-o) 
[![npm](https://img.shields.io/npm/dt/sort-o.svg)](https://www.npmjs.com/package/chai-exclude)
> Utility for your sorting needs.



## Features
- Sort keys of an object.
- Sort arrays by length and value.
- TBD..

## Installation

```bash
npm install --save sort-o
```

```bash
yarn add sort-o
```

## Usage

#### Require 

```js
  const sorto = require('sort-o');

  sorto.sort(data);
```

#### ES6 Import

```js
  import { sort, sortOrder } from 'sort-o';

  sort(data, sortOrder.ASC);
```

## API

#### sorto.sort(data [, sortOrder])
Sort data as per the specified order.
 - Suppports deep sorting for object keys.

#### sortOrder
| sortOrder | Type | Value | Description |
|-----------------|----------|----------|--------------------------------------------|
| **sortOrder.ASC** `(default)` | `string` | 'asc' | Sort in ascending order |
| **sortOrder.DESC** | `string` | 'desc' | Sort in descending order |
| **sortOrder.LENGTH** | `string` | 'length' | Sort in ascending order by length |
| **sortOrder.LENGTH_REVERSE** | `string` | 'length_reverse' | Sort in descending order by length |

## Example

#### Sort keys of an object.
```js
  import { sort, sortOrder } from 'sort-o';

  const input = {
    a: 1,
    c: {
      b: 2,
      c: 3,
      a: 1
    },
    b: 2
  };

  sort(input, sortOrder.ASC);

  // => {
  //      a: 1,
  //      b: 2, 
  //      c:{
  //        a: 1,
  //        b: 2,
  //        c: 3
  //      }
  //    }
```

#### Sort array of strings.
```js
  import {sort, sortOrder} from 'sort-o';

  const input = [
    'dddd',
    'bb',
    'ccc',
    'a'
  ];

  sort(input, sortOrder.LENGTH);
  
  // => [
  //      'a',
  //      'bb',
  //      'ccc',
  //      'dddd'
  //    ]
```
