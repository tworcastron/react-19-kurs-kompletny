import styles from './Header.module.scss'
import Searchbar from './Searchbar/Searchbar'

export default function Header() {
  return (
    <div className={`${styles.header} container`}>
      <div>
        <Searchbar />
      </div>
    </div>
  )
}
