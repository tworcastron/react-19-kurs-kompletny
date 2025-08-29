import { createContext } from "react"

const ThemeContext = createContext({
  color: 'primary',
  changeColor: () => {},
})
ThemeContext.displayName = 'ThemeContext'

export default ThemeContext