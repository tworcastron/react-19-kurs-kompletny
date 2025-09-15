import { useNavigate } from "react-router";
import axios from "../../axios";
import HotelForm from "./HotelForm";
import useAuth from '../../hooks/useAuth'

export default function AddHotel() {
  const [user] = useAuth()
  const navigate = useNavigate()

  const addHotel = async (values) => {
    await axios.post(`/hotels.json?auth=${user.idToken}`, {
      ...values,
      userId: user.localId,
    })
    navigate('/profil/hotele')
  }

  return (
    <div>
      <HotelForm onSubmit={addHotel} />
    </div>
  )
}