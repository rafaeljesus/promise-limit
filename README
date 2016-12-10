## Promise Limit

* Limit concurrency in executing multiple promises

## Usage

```javascript
const promiseLimit = require('promise-limit')(2)

const promises = [
  promiseLimit(() => findOrder()),
  promiseLimit(() => findInvoice()),
  promiseLimit(() => findShipping())
]

Promise.all(promises).then(res => {
  console.log(res)
})
```
