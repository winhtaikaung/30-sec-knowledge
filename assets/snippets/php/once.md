### once

Call a function only once.

```php
function once($function)
{
    return function (...$args) use ($function) {
        static $called = false;
        if ($called) {
            return;
        }
        $called = true;
        return $function(...$args);
    };
}
```

```php
$add = function ($a, $b) {
    return $a + $b;
};

$once = once($add);

var_dump($once(10, 5)); // 15
var_dump($once(20, 10)); // null
```
