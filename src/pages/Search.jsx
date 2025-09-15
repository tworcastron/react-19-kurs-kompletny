import { useEffect, useState } from "react"
import { initHotels } from "../reducer"
import LoadingIcon from "../components/UI/LoadingIcon/LoadingIcon"
import useWebsiteTitle from "../hooks/useWebsiteTitle"
import Hotel from "../components/Hotels/Hotel/Hotel"
import { useSearchParams } from "react-router"
import axios from '../axios'
import { objectToArrayWithId } from "../lib/objects"

export default function Search() {
  useWebsiteTitle('Wyniki wyszukiwania')
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchParams] = useSearchParams()

  const query = searchParams.get('fraza')
  
  useEffect(() => {
    setLoading(true)

    const fetchResults = async () => {
      const res = await axios.get('/hotels.json')
      const foundHotels = objectToArrayWithId(res.data)
        .filter(hotel => hotel.status === '1')
        .filter(x => x.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
        
      setHotels(foundHotels)
      setLoading(false)
    }
    fetchResults()
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