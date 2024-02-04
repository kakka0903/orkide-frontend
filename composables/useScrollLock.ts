export const useScrollLockState = () => {
  return useState('scroll-lock', () => {
    return false
  })
}

export const useScrollLock = () => {
  const enableScrollLock = useScrollLockState()
  onMounted(() => {
    enableScrollLock.value = true
  })
  onBeforeUnmount(() => {
    enableScrollLock.value = false
  })
}
