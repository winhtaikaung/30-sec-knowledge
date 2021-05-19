### pipe

> ```(((a, b, …, n) → o), (o → p), …, (x → y), (y → z)) → ((a, b, …, n) → z)```

Performs left-to-right function composition. The leftmost function may have any arity; the remaining functions must be unary.

In some libraries this function is named sequence.

Note: The result of pipe is not automatically curried.

`Example`

```js
const f = R.pipe(Math.pow, R.negate, R.inc);

f(3, 4); // -(3^4) + 1
```