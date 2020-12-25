import { useThrottle } from '../utils/useThrottle'
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { ScrollHandler } from '@/types'

export function useScroll (
  element: HTMLElement | Window,
  handler: ScrollHandler,
  delay?: number
) {
  const scrollTop = ref(0)
  const throttleFunc = useThrottle(() => {
    scrollTop.value = document.body.scrollTop || document.documentElement.scrollTop
  }, delay)
  const unwatch = watch(scrollTop, () => {
    handler(scrollTop.value)
  })
  const scrollTo = () => {
    element.scrollTo({ left: 0, top: 0, behavior: 'auto' })
  }
  onMounted(() => {
    element.addEventListener('scroll', throttleFunc)
  })
  onUnmounted(() => {
    element.removeEventListener('scroll', throttleFunc)
    unwatch()
  })
  return { scrollTo }
}
