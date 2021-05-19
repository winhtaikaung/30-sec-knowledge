### propEq

> ```String → a → Object → Boolean```

Returns `true` if the specified object property is equal, in `R.equals` terms, to the given value; `false` otherwise. You can test multiple properties with `R.whereEq`.

`Example`

```js
const abby = {name: 'Abby', age: 7, hair: 'blond'};
const fred = {name: 'Fred', age: 12, hair: 'brown'};
const rusty = {name: 'Rusty', age: 10, hair: 'brown'};
const alois = {name: 'Alois', age: 15, disposition: 'surly'};
const kids = [abby, fred, rusty, alois];
const hasBrownHair = R.propEq('hair', 'brown');

R.filter(hasBrownHair, kids); //=> [fred, rusty]
```