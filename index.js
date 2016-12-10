module.exports = limit => {

  if (limit < 1) throw new TypeError('Limit must to be a greater then 1')

  const queue = []
  let count = 0

  return fn => new Promise((resolve, reject) => {
    queue.push(run)
    if (count < limit) return run()
  })

  function run () {
    count++
    fn().then(val => {
      resolve(val),
      next()
    }).catch(err => {
      reject(err)
      next()
    })
  }

  function next () {
    count--
    if (queue.length <= 0) return
    queue.shift()()
  }
}
