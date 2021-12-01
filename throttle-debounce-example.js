const bulletin = document.querySelector('#bulletin')
const post = () => {
  const span = document.createElement('span')
  span.textContent = 'post!'
  span.style.padding = '5px'
  bulletin.appendChild(span)
}

const throttleButton = document.querySelector('#throttle-btn')
const throttlePost = throttle(post, null, 1000)
throttleButton.addEventListener('click', throttlePost)

const debounceButton = document.querySelector('#debounce-btn')
const debouncePost = debounce(post, null, 1000)
debounceButton.addEventListener('click', debouncePost)