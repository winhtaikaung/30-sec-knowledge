### maxDate

Returns the maximum of the given dates.

Use `Math.max.apply()` to find the maximum date value, `new Date()` to convert it to a `Date` object.

```js
const maxDate = (...dates) => new Date(Math.max.apply(null, ...dates));
```

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
