### Variadic Function

#### Description

Worker pools are a model in which a fixed number of m workers (implemented in Go with goroutines) work their way through n tasks in a work queue (implemented in Go with a channel). Work stays in a queue until a worker finishes up its current task and pulls a new one off.

Traditionally, thread pools have been useful to amortizing the costs of spinning up new threads. Goroutines are lightweight enough that that’s not a problem in Go, but a worker pool can still be useful in controlling the number of concurrently running tasks, especially when those tasks are accessing resources that can easily be saturated like I/O or remote APIs.

#### Example

```go
package main

import (
    "fmt"
    "time"
)

func worker(id int, jobs <-chan int, results chan<- int) {
    for j := range jobs {
        fmt.Println("worker", id, "started  job", j)
        time.Sleep(time.Second)
        fmt.Println("worker", id, "finished job", j)
        results <- j * 2
    }
}

func main() {

    const numJobs = 5
    jobs := make(chan int, numJobs)
    results := make(chan int, numJobs)

    for w := 1; w <= 3; w++ {
        go worker(w, jobs, results)
    }

    for j := 1; j <= numJobs; j++ {
        jobs <- j
    }
    close(jobs)

    for a := 1; a <= numJobs; a++ {
        <-results
    }
}
```

#### Explanation

- In order to use our pool of workers we need to send them work and collect their results. We make 2 channels for this.

- This starts up 3 workers, initially blocked because there are no jobs yet.

- Here we send 5 jobs and then close that channel to indicate that’s all the work we have.

- Finally we collect all the results of the work. This also ensures that the worker goroutines have finished. An alternative way to wait for multiple goroutines is to use a WaitGroup.

- Our running program shows the 5 jobs being executed by various workers. The program only takes about 2 seconds despite doing about 5 seconds of total work because there are 3 workers operating concurrently.
