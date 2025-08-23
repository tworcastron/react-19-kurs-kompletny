import { useState } from "react"

export default function Searchbar(props) {
  const [value, setValue] = useState('')

  const styles = { borderRadius: 8, marginRight: 5 }

  const onSearch = () => {
    props.onSearch(value)
  }
  const onKeyDown = (e) => {
    if (e.code === 'Enter') onSearch()
  }

  return (
    <div className="d-flex">
      <input 
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
        className="btn btn-primary"
        onClick={onSearch}
      >
        Szukaj
      </button>
    </div>
  )
}