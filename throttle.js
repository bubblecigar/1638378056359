export const throttle = (func, context, delay = 1000) => {
  let lock = false
  return (...args) => {
    if (lock) {
      // do nothing
    } else {
      func.apply(context, args)
      lock = true
      setTimeout(
        () => {
          lock = false
        }, delay
      )
    }
  }
}