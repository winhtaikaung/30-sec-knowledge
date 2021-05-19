### Channels

#### Description

Channels are the pipes that connect concurrent goroutines. You can send values into channels from one goroutine and receive those values into another goroutine.

#### Example

```go
package main

import "fmt"

func main() {

    messages := make(chan string)

    go func() { messages <- "ping" }()

    msg := <-messages
    fmt.Println(msg)
}
```

#### Explanation

Create a new channel with make(chan val-type). Channels are typed by the values they convey.

Send a value into a channel using the channel <- syntax. Here we send "ping" to the messages channel we made above, from a new goroutine.

The <-channel syntax receives a value from the channel. Here we’ll receive the "ping" message we sent above and print it out.

When we run the program the "ping" message is successfully passed from one goroutine to another via our channel.

By default sends and receives block until both the sender and receiver are ready. This property allowed us to wait at the end of our program for the "ping" message without having to use any other synchronization.
