### Non-Blocking Channel Operations

#### Description

Basic sends and receives on channels are blocking. However, we can use select with a default clause to implement non-blocking sends, receives, and even non-blocking multi-way selects.

#### Example

```go
package main

import "fmt"

func main() {
    messages := make(chan string)
    signals := make(chan bool)

    select {
    case msg := <-messages:
        fmt.Println("received message", msg)
    default:
        fmt.Println("no message received")
    }

    msg := "hi"
    select {
    case messages <- msg:
        fmt.Println("sent message", msg)
    default:
        fmt.Println("no message sent")
    }

    select {
    case msg := <-messages:
        fmt.Println("received message", msg)
    case sig := <-signals:
        fmt.Println("received signal", sig)
    default:
        fmt.Println("no activity")
    }
}
```

#### Explanation

- If a value is available on `messages` then select will take the `<-messages case` with that value. If not it will immediately take the `default` case.

- A non-blocking send works similarly. Here `msg` cannot be sent to the `messages channel`, because the channel has no buffer and there is no receiver. Therefore the `default` case is selected.

- We can use multiple cases above the `default` clause to implement a multi-way non-blocking `select`. Here we attempt non-blocking receives on both `messages` and `signals`.
