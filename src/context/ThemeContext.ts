import { createContext } from "react"

const ThemeContext = createContext({
  color: 'primary',
  changeColor: () => {},
})

export default ThemeContext