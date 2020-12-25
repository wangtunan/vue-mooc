import { throttle } from 'throttle-debounce'

export function useThrottle (handler: () => void, delay = 300) {
  return throttle(delay, handler)
}
