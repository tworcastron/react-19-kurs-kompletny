import { useEffect } from "react"

export default function useWebsiteTitle(title) {
  useEffect(() => {
    document.title = title + ' - Noclegi'
  }, [title])
}