// 實作 Fibonacci number (費式數列)
// 建立函式 fibonacci 代入參數 position，position 表示的是想要得到 fibonacci sequence 中的第幾個數字的值。
// fibonacci(0) // 0
// fibonacci(1) // 1
// fibonacci(2) // 1
// fibonacci(3) // 2
// fibonacci(4) // 3

const fibonacci = position => {
  if (position === 0) {
    return 0
  }
  if (position === 1) {
    return 1
  }
  return fibonacci(position - 1) + fibonacci(position - 2)
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))