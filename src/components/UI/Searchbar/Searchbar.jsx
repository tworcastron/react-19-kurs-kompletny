import { use, useEffect, useRef, useState } from "react"
import ThemeContext from "../../../context/ThemeContext"
import useLocalStorage from "../../../hooks/useLocalStorage"
import { useNavigate } from "react-router"

export default function Searchbar(props) {
  const [value, setValue] = useLocalStorage('query', '')
  const themeContext = use(ThemeContext)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const styles = { borderRadius: 8, marginRight: 5 }

  const onSearch = () => {
    navigate({ pathname: 'szukaj', search: `?fraza=${value}` })
  }
  const onKeyDown = (e) => {
    if (e.code === 'Enter') onSearch()
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [inputRef.current])

  return (
    <div className="d-flex">
      <input 
        ref={inputRef}
        placeholder='Szukaj...'
        style={styles}
        className="form-control"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        // onKeyDown={e => e.code === 'Enter' && onSearch()}
      />
      <button
        type="button"
        className={`btn btn-${themeContext.color}`}
        onClick={onSearch}
      >
        Szukaj
      </button>
    </div>
  )
}