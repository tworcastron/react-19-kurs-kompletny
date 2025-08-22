import styles from './Hotel.module.css'
import hotelImg from '../../../assets/images/hotel.jpg'

export default function Hotel() {
  return (
    <div className={styles.hotel}>
      <div className="row">
        <div className="col-4">
          <img src={hotelImg} alt='' className='img-fluid img-thumbnail' />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <p><b>Pensjonat</b></p>
              <span className="badge text-bg-light">Warszawa</span>
            </div>
            <div className="col-6">
              <p><b>Ocena: 8.5</b></p>
              <span className="badge text-bg-secondary">233</span>
            </div>
          </div>
        </div>
      </div>

      <p className={styles.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus porro illum veritatis molestiae nemo tenetur veniam, soluta impedit placeat fuga saepe ex beatae alias maxime nobis explicabo praesentium voluptates. Dignissimos.</p>

      <div className="text-end">
        <button className='btn btn-primary'>Pokaż</button>
      </div>
    </div>
  )
}