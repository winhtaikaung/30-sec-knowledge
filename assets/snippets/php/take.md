### take
Returns an array with n elements removed from the beginning.

```php
function take($items, $n = 1)
{
    return array_slice($items, 0, $n);
}
```

```php
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3, 4, 5], 2); // [1, 2]
```
