### complement

> ```(*… → *) → (*… → Boolean)```

Takes a function `f` and returns a function `g` such that if called with the same arguments when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns true.

`R.complement` may be applied to any functor

`Example`

```js
const isNotNil = R.complement(R.isNil);

isNil(null);    //=> true
isNotNil(null); //=> false
isNil(7);       //=> false
isNotNil(7);    //=> true
```