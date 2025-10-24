import React from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

function Navigation() {
  return (
    <>
    <nav className="flex sm:justify-center space-x-4">
        <ThemeSwitch />
    </nav>
    </>
  )
}

export default Navigation