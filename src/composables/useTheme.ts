import { AppTheme } from '../types'
import { ref, watch } from 'vue'

export default () => {
  const theme = ref<AppTheme>('light')
  const setTheme = (mode: AppTheme): void => {
    theme.value = mode
  }
  const toggleTheme = (): void => {
    if (theme.value === 'dark') theme.value = 'light'
    else theme.value = 'dark'
  }
  watch(
    () => theme.value,
    (value: AppTheme) => {
      if (value === 'light') document.body.setAttribute('data-theme', 'dark')
      else document.body.removeAttribute('data-theme')
    }
  )
  return {
    theme,
    setTheme,
    toggleTheme,
  }
}
