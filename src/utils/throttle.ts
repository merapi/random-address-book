export default function throttle(
  callback: (...args: any[]) => void,
  wait: number,
  immediate = false,
) {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let initialCall = true

  return function(...args: any[]) {
    const callNow = immediate && initialCall
    const next = () => {
      callback(...args)
      timeout = null
    }

    if (callNow) {
      initialCall = false
      next()
    }

    if (!timeout) {
      timeout = setTimeout(next, wait)
    }
  }
}
