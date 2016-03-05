# Broken Promises (And how to fix them)
### Beau Davenport, Mar 9, 2016

---
## What is a promise?

According to the [Promises A+ Specification](https://promisesaplus.com/):

    A promise represents the eventual result of an asynchronous operation.

    The primary way of interacting with a promise is through its then method,

    which registers callbacks to receive either a promise’s eventual value or

    the reason why the promise cannot be fulfilled.

Conceptually, a promise implementation is the asynchronous equivalent of a ```try/catch```:

```javascript
try {
  var data = getSomeData();
  console.log(data);
} catch(e) {
  console.log(e);
}
```


## Why are they used?

- DB Queries
- Web Requests
- User Interaction
- anything asynchronous
