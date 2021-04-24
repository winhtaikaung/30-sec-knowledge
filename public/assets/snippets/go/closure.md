### Closure

#### Description

Go supports [_anonymous functions_](http://en.wikipedia.org/wiki/Anonymous_function), which can form [_closures_](<http://en.wikipedia.org/wiki/Closure_(computer_science)>). Anonymous functions are useful when you want to define a function inline without having to name it.

#### Example

```go
package main

import "fmt"

func intSeq() func() int {
    i := 0
    return func() int {
        i++
        return i
    }
}

func main() {

    nextInt := intSeq()

    fmt.Println(nextInt())
    fmt.Println(nextInt())
    fmt.Println(nextInt())

    newInts := intSeq()
    fmt.Println(newInts())
}
```

#### Explanation

This function intSeq returns another function, which we define anonymously in the body of intSeq. The returned function closes over the variable i to form a closure.

We call intSeq, assigning the result (a function) to nextInt. This function value captures its own i value, which will be updated each time we call nextInt.

To confirm that the state is unique to that particular function, create and test a new one.
