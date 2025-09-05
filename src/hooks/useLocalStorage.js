import { useState } from "react"

export default function useLocalStorage(key, initValue) {
  const [state, setState] = useState(initValue)

  let value

  const storageValue = window.localStorage.getItem(key)
  if (storageValue) {
    value = JSON.parse(storageValue)
  } else {
    value = state
  }

  const setValue = (val) => {
    setState(val)
    window.localStorage.setItem(key, JSON.stringify(val))
  }

  return [value, setValue]
}