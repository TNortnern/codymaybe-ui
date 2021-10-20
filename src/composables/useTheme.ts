import { ref, watch } from 'vue'
export type AppTheme = 'light' | 'dark'

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
    (_, value: AppTheme) => {
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
