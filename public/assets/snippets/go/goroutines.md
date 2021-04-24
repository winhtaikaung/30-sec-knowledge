### Goroutines

#### Description

A goroutine is a lightweight thread managed by the Go runtime.

#### Example

```go
package main

import (
    "fmt"
    "time"
)

func f(from string) {
    for i := 0; i < 3; i++ {
        fmt.Println(from, ":", i)
    }
}

func main() {

    f("direct")

    go f("goroutine")

    go func(msg string) {
        fmt.Println(msg)
    }("going")

    time.Sleep(time.Second)
    fmt.Println("done")
}
```

#### Explanation

Suppose we have a function call f(s). Here’s how we’d call that in the usual way, running it synchronously.

To invoke this function in a goroutine, use go f(s). This new goroutine will execute concurrently with the calling one.

You can also start a goroutine for an anonymous function call.

Our two function calls are running asynchronously in separate goroutines now. Wait for them to finish (for a more robust approach, use a WaitGroup).

When we run this program, we see the output of the blocking call first, then the interleaved output of the two goroutines. This interleaving reflects the goroutines being run concurrently by the Go runtime.
