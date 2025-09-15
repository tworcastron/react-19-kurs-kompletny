import { useEffect, useState } from "react"
import { useParams } from "react-router"
import LoadingIcon from "../components/UI/LoadingIcon/LoadingIcon"
import { initHotels } from "../reducer"
import axios from "../axios"

export default function HotelPreview() {
  const { id } = useParams()
  const [hotel, setHotel] = useState(null)

  useEffect(() => {
    const fetchHotel = async () => {
      const res = await axios.get(`/hotels/${id}.json`)
      console.log(res.data)
      setHotel(res.data)
    }
    
    fetchHotel()
  }, [id])

  if (!hotel) return <LoadingIcon />

  return (
    <h1>Hotel: {hotel.title}</h1>
  )
}