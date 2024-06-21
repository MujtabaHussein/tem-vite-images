import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useGlobalContext } from './context'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <FaSun className='toggle-icon' />
        ) : (
          <FaMoon className='toggle-icon' />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle
