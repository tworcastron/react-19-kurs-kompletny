import { useEffect, useState } from "react"
import { initHotels } from "../reducer"
import LoadingIcon from "../components/UI/LoadingIcon/LoadingIcon"
import useWebsiteTitle from "../hooks/useWebsiteTitle"
import Hotel from "../components/Hotels/Hotel/Hotel"

export default function Search() {
  useWebsiteTitle('Wyniki wyszukiwania')
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // symulacja pobrania danych z BE
    setTimeout(() => {
      setHotels(initHotels)
      setLoading(false)
    }, 500)
  }, [])
  
  if (loading) return <LoadingIcon /> 

  return (
    <div>
      <h1>Wyniki wyszukiwania: xxx</h1>

      {hotels.map((hotel) => (
        <Hotel {...hotel} key={hotel.id} onShow={() => {}} />
      ))}
    </div>
  )
}