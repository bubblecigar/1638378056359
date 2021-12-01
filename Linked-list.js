// 使用 Linked List 實作 Stack 實作需包含以下方法。
// push() : 添加新元素。 
// pop():移除元素並返回被移除的元素。 
// size():返回所有元素數量。
// const myStack = new Stack() 
// myStack.push(1) 
// myStack.push(2) 
// myStack.push(3) 
// myStack.pop() // 3 
// myStack.size() // 2

function Node(value, next) {
  this.value = value
  this.next = next
}

function Stack() {
  this.head = null

  this.counter = 0
  this.size = () => this.counter

  this.push = (value) => {
    const node = new Node(value, null)
    if (this.head === null) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
    this.counter = this.counter + 1
  }
  this.pop = () => {
    if (this.head === null) {
      return undefined
    } else {
      const { value, next } = this.head
      this.head = next
      this.counter = this.counter - 1
      return value
    }
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.size())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.size())