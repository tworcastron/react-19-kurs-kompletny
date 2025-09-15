import { useEffect, useState } from "react"
import { useParams } from "react-router"
import LoadingIcon from "../components/UI/LoadingIcon/LoadingIcon"
import { initHotels } from "../reducer"
import axios from "../axios"
import useAuth from '../hooks/useAuth'

export default function HotelPreview() {
  const { id } = useParams()
  const [user] = useAuth()
  const [hotel, setHotel] = useState(null)
  const [rating, setRating] = useState(5)

  useEffect(() => {
    const fetchHotel = async () => {
      const res = await axios.get(`/hotels/${id}.json`)
      console.log(res.data)
      setHotel(res.data)
    }
    
    fetchHotel()
  }, [id])

  const submitRating = async () => {
    try {
      await axios.patch(`/hotels/${id}.json?auth=${user.idToken}`, { rating })
      alert('Zaktualizowano ocenę')
    } catch(err) {
      alert('Musisz się zalogować')
    }
  }

  if (!hotel) return <LoadingIcon />

  return (
    <div className="card">
      <div className="card-header">
        <h1>Hotel: {hotel.title}</h1>
      </div>
      <div className="card-body">
        <img
          src={`https://picsum.photos/id/237/300/200`}
          alt=""
          className="img-fluid img-thumbnail mb-4" />
        <p>Miejscowość: <b>{hotel.city}</b></p>
        <p>Miejsca: <b>{hotel.rooms}</b></p>
        <p className="lead">{hotel.description}</p>
        <p>Wyposażenie:</p>
        <ul>
          {hotel.features.map(item => <li key={item}>{item}</li>)}
        </ul>
        <h4>Ocena: {hotel.rating ?? 'brak ocen'}</h4>
      </div>
      <div className="card-footer">
        {user && (
          <div className="row mt-2">
            <div className="col">
              <select
                value={rating}
                onChange={e => setRating(e.target.value)}
                className="form-select mb-2">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="col">
              <button className="btn btn-primary" onClick={submitRating}>Oceń</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}