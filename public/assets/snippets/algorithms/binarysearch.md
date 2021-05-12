### Binary Search

#### Answer

**Binary Search**: Search a sorted array by repeatedly dividing the search interval in half. Begin with an interval covering the whole array. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

#### Pseudo

- Compare x with the middle element.
- If x matches with the middle element, we return the mid index.
- Else If x is greater than the mid element, then x can only lie in the right half subarray after the mid element. So we recur for the right half.
- Else (x is smaller) recur for the left half.

### Recursive Implementation

```html
<script>
  // JavaScript program to implement recursive Binary Search

  // A recursive binary search function. It returns
  // location of x in given array arr[l..r] is present,
  // otherwise -1
  function binarySearch(arr, l, r, x) {
    if (r >= l) {
      let mid = l + Math.floor((r - l) / 2)

      // If the element is present at the middle
      // itself
      if (arr[mid] == x) return mid

      // If element is smaller than mid, then
      // it can only be present in left subarray
      if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x)

      // Else the element can only be present
      // in right subarray
      return binarySearch(arr, mid + 1, r, x)
    }

    // We reach here when element is not
    // present in array
    return -1
  }

  let arr = [2, 3, 4, 10, 40]
  let x = 10
  let n = arr.length
  let result = binarySearch(arr, 0, n - 1, x)
  result == -1
    ? document.write('Element is not present in array')
    : document.write('Element is present at index ' + result)
</script>
```

### TimeComplexity

**Worst-case space complexity:** O(1)

**Best-case performance:** O(1)

**Worst-case performance:** O(log n)

### Notes

Here we are using

```C
int mid = low + (high – low)/2;
```

Maybe, you wonder why we are calculating the middle index this way, we can simply add the lower and higher index and divide it by 2.

```C
int mid = (low + high)/2;
```

But if we calculate the middle index like this means our code is not 100% correct, it contains bugs.

That is, it fails for larger values of int variables low and high. Specifically, it fails if the sum of low and high is greater than the maximum positive int value(231 – 1 ).

The sum overflows to a negative value and the value stays negative when divided by 2. In java, it throws ArrayIndexOutOfBoundException.
