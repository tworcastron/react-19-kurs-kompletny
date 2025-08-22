import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/hotel.jpg'

export default function Hotel() {
  return <div className={styles.hotel}>
    <img src={hotelImg} alt='' className='img-fluid' />
    Hotel
  </div>
}