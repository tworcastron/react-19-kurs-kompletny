import axios from "../../axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { objectToArrayWithId } from '../../lib/objects'
import useAuth from '../../hooks/useAuth'

export default function MyHotels() {
  const [user] = useAuth()
  const [hotels, setHotels] = useState([])

  const fetchHotels = async () => {
    const res = await axios.get('/hotels.json')
    const myHotels = objectToArrayWithId(res.data)
      .filter(h => h.userId === user.localId)

    setHotels(myHotels)
  }

  const deleteHandler = async (id) => {
    if (!window.confirm('Czy na pewno chcesz usunąć hotel?')) return

    try {
      await axios.delete(`/hotels/${id}.json`)
      setHotels(hotels.filter(x => x.id !== id))
    } catch(er) {
      // 
    }
  }

  useEffect(() => {
    fetchHotels()
  }, [])

  return (
    <div>
      {hotels.length === 0 ? (
        <p>Nie masz jeszcze żadnych hoteli.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Stauts</th>
              <th>Opcje</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map(hotel => (
              <tr key={hotel.id}>
                <td>{hotel.title}</td>
                <td>{hotel.status ? 'Aktywny' : 'Ukryty'}</td>
                <td>
                  <Link to={`/profil/edytuj-hotel/${hotel.id}`} className="btn btn-warning">Edytuj</Link>
                  <button className="btn btn-danger ms-2" onClick={() => deleteHandler(hotel.id)}>Usuń</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Link className="btn btn-primary" to="/profil/dodaj-hotel">Dodaj nowy hotel</Link>
    </div>
  )
}