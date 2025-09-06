import { useEffect, useState } from "react"
import { initHotels } from "../reducer"
import LoadingIcon from "../components/UI/LoadingIcon/LoadingIcon"
import useWebsiteTitle from "../hooks/useWebsiteTitle"
import Hotel from "../components/Hotels/Hotel/Hotel"
import { useSearchParams } from "react-router"

export default function Search() {
  useWebsiteTitle('Wyniki wyszukiwania')
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  const query = searchParams.get('fraza')
  
  useEffect(() => {
    setLoading(true)

    // symulacja pobrania danych z BE
    setTimeout(() => {
      const foundHotels = initHotels
        .filter(x => x.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        
      setHotels(foundHotels)
      setLoading(false)
    }, 500)
  }, [query])
  
  if (loading) return <LoadingIcon /> 

  return (
    <div>
      <h1>Wyniki wyszukiwania: {query}</h1>

      {hotels.map((hotel) => (
        <Hotel {...hotel} key={hotel.id} onShow={() => {}} />
      ))}
    </div>
  )
}