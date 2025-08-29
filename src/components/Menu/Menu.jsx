import { useContext } from 'react'
import styles from './Menu.module.css'
import AuthContext from '../../context/AuthContext'

export default function Menu() {
  const authContext = useContext(AuthContext)

  const logIn = (e) => {
    e.preventDefault()
    authContext.logIn()
  }
  const logOut = (e) => {
    e.preventDefault()
    authContext.logOut()
  }

  return (
    <div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="#">Home</a>
        </li>
        {authContext.isAuthenticated ? (
          <li className={styles.menuItem}>
            <a href="#" onClick={logOut}>Wyloguj</a>
          </li>
        ) : (
          <li className={styles.menuItem}>
            <a href="#" onClick={logIn}>Zaloguj</a>
          </li>
        )}
      </ul>
    </div>
  )
}