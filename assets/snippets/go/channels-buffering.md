### Channel Buffering

#### Description

By default channels are unbuffered, meaning that they will only accept sends (chan <-) if there is a corresponding receive (<- chan) ready to receive the sent value. Buffered channels accept a limited number of values without a corresponding receiver for those values.

#### Example

```go
package main

import "fmt"

func main() {

    messages := make(chan string, 2)

    messages <- "buffered"
    messages <- "channel"

    fmt.Println(<-messages)
    fmt.Println(<-messages)
}
```

#### Explanation

Here we make a channel of strings buffering up to 2 values.

Because this channel is buffered, we can send these values into the channel without a corresponding concurrent receive.

Later we can receive these two values as usual.
