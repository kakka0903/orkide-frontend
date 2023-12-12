/**
 * Sets `dark` class based on the preferred theme.
 * From tailwindcss documentation:
 * https://tailwindcss.com/docs/dark-mode
 */
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
