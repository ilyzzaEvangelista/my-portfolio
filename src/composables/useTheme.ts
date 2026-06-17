import { ref, computed } from 'vue'

export type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

function applyTheme(value: Theme) {
  document.documentElement.setAttribute('data-theme', value)
  localStorage.setItem('theme', value)
}

export function initTheme() {
  const saved = localStorage.getItem('theme')
  const initial: Theme = saved === 'dark' || saved === 'light' ? saved : 'light'
  theme.value = initial
  applyTheme(initial)
}

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  function toggleTheme() {
    const next = theme.value === 'light' ? 'dark' : 'light'
    theme.value = next
    applyTheme(next)
  }

  function setTheme(value: Theme) {
    theme.value = value
    applyTheme(value)
  }

  return { theme, isDark, toggleTheme, setTheme }
}
