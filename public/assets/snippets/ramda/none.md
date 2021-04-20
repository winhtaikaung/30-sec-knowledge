### none

> ```(a → Boolean) → [a] → Boolean```

Returns `true` if no elements of the list match the predicate, `false` otherwise.

Dispatches to the all method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

`Example`

```js
const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;

R.none(isEven, [1, 3, 5, 7, 9, 11]);  //=> true
R.none(isOdd, [1, 3, 5, 7, 8, 11]);   //=> false
```