export default function (deps) {
  const { React, ui, icons } = deps
  const { useState, useEffect, createElement: h } = React
  const { Cell } = ui
  const { Sun, Moon } = icons

  const STORAGE_KEY = 'bp-theme'
  const DARK = 'dark'
  const LIGHT = 'light'

  function ThemeToggle() {
    const [dark, setDark] = useState(() => {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && stored !== DARK && stored !== LIGHT) localStorage.removeItem(STORAGE_KEY)
      return (stored === LIGHT) ? false : true
    })
    useEffect(() => {
      const theme = dark ? DARK : LIGHT
      document.documentElement.setAttribute('data-theme', theme)
      localStorage.setItem(STORAGE_KEY, theme)
    }, [dark])
    return h(Cell, { onClick: () => setDark(d => !d) },
      dark ? h(Sun, { size: 16 }) : h(Moon, { size: 16 })
    )
  }

  return {
    id: 'darkmode',
    label: 'Dark mode',
    description: 'Przełącznik dark/light',
    action: h(ThemeToggle),
  }
}
