import styles from './Header.module.scss'
import Searchbar from './Searchbar/Searchbar'

export default function Header(props) {
  return (
    <div className={`${styles.header} container`}>
      <div>
        <Searchbar onSearch={props.onSearch} />
      </div>
    </div>
  )
}
