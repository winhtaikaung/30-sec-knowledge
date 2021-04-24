### Closure

#### Description

A Mutex, or a mutual exclusion is a mechanism that allows us to prevent concurrent processes from entering a critical section of data whilst it’s already being executed by a given process.A Mutex must not be copied after first use.

#### Example

```go
package main

import (
    "fmt"
    "math/rand"
    "sync"
    "sync/atomic"
    "time"
)

func main() {

    var state = make(map[int]int)

    var mutex = &sync.Mutex{}

    var readOps uint64
    var writeOps uint64

    for r := 0; r < 100; r++ {
        go func() {
            total := 0
            for {

                key := rand.Intn(5)
                mutex.Lock()
                total += state[key]
                mutex.Unlock()
                atomic.AddUint64(&readOps, 1)

                time.Sleep(time.Millisecond)
            }
        }()
    }

    for w := 0; w < 10; w++ {
        go func() {
            for {
                key := rand.Intn(5)
                val := rand.Intn(100)
                mutex.Lock()
                state[key] = val
                mutex.Unlock()
                atomic.AddUint64(&writeOps, 1)
                time.Sleep(time.Millisecond)
            }
        }()
    }

    time.Sleep(time.Second)

    readOpsFinal := atomic.LoadUint64(&readOps)
    fmt.Println("readOps:", readOpsFinal)
    writeOpsFinal := atomic.LoadUint64(&writeOps)
    fmt.Println("writeOps:", writeOpsFinal)

    mutex.Lock()
    fmt.Println("state:", state)
    mutex.Unlock()
}
```

#### Explanation

- This mutex will synchronize access to state.

- Here we start 100 goroutines to execute repeated reads against the state, once per millisecond in each goroutine.

- For each read we pick a key to access, Lock() the mutex to ensure exclusive access to the state, read the value at the chosen key, Unlock() the mutex, and increment the readOps count.

- Wait a bit between reads.

- We’ll also start 10 goroutines to simulate writes, using the same pattern we did for reads.

- Let the 10 goroutines work on the state and mutex for a second.

- Running the program shows that we executed about 90,000 total operations against our mutex-synchronized state.
