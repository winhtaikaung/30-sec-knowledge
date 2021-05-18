### IsEven

#### Description

Returns `true` if the given number is even, `false` otherwise.

- Checks whether a number is odd or even using the modulo (`%`) operator.
- Returns `true` if the number is even, `false` if the number is odd.

```go
func IsEven(n int) bool {
	return n % 2 == 0
}
```

```go
IsEven(3) // false
```
