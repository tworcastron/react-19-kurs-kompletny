import { useNavigate, useParams } from "react-router";
import axios from "../../axios";
import HotelForm from "./HotelForm";
import useAuth from '../../hooks/useAuth'
import { useEffect, useState } from "react";
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon'

export default function EditHotel() {
  const [user] = useAuth()
  const navigate = useNavigate()
  const { id } = useParams()
  const [hotel, setHotel] = useState(null)

  useEffect(() => {
    const fetchHotel = async () => {
      const res = await axios.get(`/hotels/${id}.json`)
      setHotel(res.data)
    } 

    fetchHotel()
  }, [id])

  const editHotel = async (values) => {
    await axios.put(`/hotels/${id}.json`, {
      ...values,
      userId: user.localId,
    })
    navigate('/profil/hotele')
  }

  if (!hotel) {
    return <LoadingIcon />
  }

  return (
    <div>
      <h2>Edytuj hotel</h2>
      <HotelForm hotel={hotel} onSubmit={editHotel} />
    </div>
  )
}