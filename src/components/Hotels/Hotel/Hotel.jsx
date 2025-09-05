import { use } from 'react'
import styles from './Hotel.module.css'
import ThemeContext from '../../../context/ThemeContext'
import useAuth from '../../../hooks/useAuth'
// import hotelImg from '../../../assets/images/hotel.jpg'

/**
 * Hotel component
 * @param {{
 *  id: number;
 *  name: string;
 *  city: string;
 *  rating: string;
 *  description: string;
 *  image: string;
 * }} props
 */
export default function Hotel(props) {
  const { id, name, city, rating, description, image } = props
  const themeContext = use(ThemeContext)
  const [user] = useAuth()

  return (
    <div className={styles.hotel}>
      <div className="row">
        <div className="col-4">
          <img src={image} alt='' className='img-fluid img-thumbnail' />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <p><b>{name}</b></p>
              <span className="badge text-bg-light">{city}</span>
            </div>
            <div className="col-6">
              <p><b>Ocena: {rating}</b></p>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.description}>{description}</p>
      <p>Dostępność: {user ? '4 pokoje' : 'Zaloguj'}</p>

      <div className="text-end">
        <button onClick={() => props.onShow(id)} className={`btn btn-${themeContext.color}`}>Pokaż</button>
      </div>
    </div>
  )
}