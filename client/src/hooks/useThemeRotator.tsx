import { useState, useEffect } from 'react'

const useThemeRotator = () => {
  const themeArray = [
    'theme_default',
    'theme_sunrise',
    'theme_berry_blast',
    'theme_cool_breeze',
    'theme_meadow',
    'theme_fiesta',
    'theme_twilight',
    'theme_cherry_blossom',
    'theme_citrus_burst',
    'theme_tropical_island',
    'theme_orchid',
    'theme_coral_reef',
    'theme_northern_lights',
    'theme_lavender_field',
    'theme_fresh_lemonade',
    'theme_blue_lagoon',
    'theme_tequila_sunrise',
    'theme_cotton_candy',
    'theme_turquoise_dream',
    'theme_vintage_rose',
  ]

  const [theme, setTheme] = useState(themeArray[0])
  const [arrayIndex, setArrayIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setArrayIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % themeArray.length
        setTheme(themeArray[newIndex])
        return newIndex
      })
    }, 2000)

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      clearInterval(interval)
    }
  }, [themeArray])

  return theme
}

export default useThemeRotator
