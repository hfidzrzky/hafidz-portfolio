let activeLocksCount = 0

export function lockScroll(): () => void {
  if (typeof document === 'undefined') {
    return () => {}
  }

  activeLocksCount += 1

  if (activeLocksCount === 1) {
    document.body.style.overflow = 'hidden'
    document.body.classList.add('modal-open')
  }

  let released = false

  return function unlock() {
    if (released) return
    released = true

    activeLocksCount = Math.max(0, activeLocksCount - 1)

    if (activeLocksCount === 0) {
      document.body.style.overflow = ''
      document.body.classList.remove('modal-open')
    }
  }
}
