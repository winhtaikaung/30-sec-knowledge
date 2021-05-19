### unary

> ```(* → b) → (a → b)```

Wraps a function of any arity (including nullary) in a function that accepts exactly 1 parameter. Any extraneous parameters will not be passed to the supplied function.

`Example`

```js
const takesTwoArgs = function(a, b) {
  return [a, b];
};

takesTwoArgs.length;  //=> 2
takesTwoArgs(1, 2);   //=> [1, 2]

const takesOneArg = R.unary(takesTwoArgs);

takesOneArg.length; //=> 1
// Only 1 argument is passed to the wrapped function
takesOneArg(1, 2); //=> [1, undefined]
```