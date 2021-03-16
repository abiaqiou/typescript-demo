const sum = (a: number, b: number) => {
  return a + b
}

const sleep = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('done')
  }, 1000)
})

console.log(sum(1, 2))