# sort-o

Sort keys of an object.

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
  import { sort, SORT_ASC } from 'sort-o';

  sort(data, SORT_ASC);
```

## API

#### sorto.sort(data[, SORT_ORDER])
Sort data as per the specified order.
 - Suppports deep sorting for object keys.

#### SORT_ORDER
| SORT_ORDER | Type | Value | Description |
|-----------------|----------|----------|--------------------------------------------|
| **SORT_ASC** `(default)` | `string` | 'asc' | Sort in ascending order |
| **SORT_DESC** | `string` | 'desc' | Sort in descending order |
| **SORT_LENGTH** | `string` | 'length' | Sort in ascending order by length |
| **SORT_LENGTH_REVERSE** | `string` | 'asc' | Sort in descending order by length |

## EXAMPLE

#### Sort keys of an object
```js
  import { sort, SORT_ASC } from 'sort-o';

  const input = {
    a: 1,
    c: {
      b: 2,
      c: 3,
      a: 1
    },
    b: 2
  };

  sort(input, SORT_ASC);

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

#### Sort array of string
```js
  import {sort, SORT_LENGTH} from 'sort-o';

  const input = [
    'dddd',
    'bb',
    'ccc',
    'a'
  ];

  sort(input, SORT_LENGTH);
  
  // => [
  //      'a',
  //      'bb',
  //      'ccc',
  //      'dddd'
  //    ]
```
