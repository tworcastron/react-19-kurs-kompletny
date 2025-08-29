import { use, useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

export default function Footer() {
  //const value = useContext(ThemeContext)
  const value = use(ThemeContext)

  return (
    <p className={`text-${value}`}>
      Stopka
    </p>
  )
}