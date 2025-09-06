import { Link } from 'react-router'
import useAuth from '../../hooks/useAuth'
import styles from './Menu.module.css'

export default function Menu() {
  const [user, setUser] = useAuth()

  const logIn = (e) => {
    e.preventDefault()
    setUser(true)
  }
  const logOut = (e) => {
    e.preventDefault()
    setUser(false)
  }

  return (
    <div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <li className={styles.menuItem}>
            <a href="#" onClick={logOut}>Wyloguj</a>
          </li>
        ) : (
          <li className={styles.menuItem}>
            <Link to="login">Zaloguj</Link>
          </li>
        )}
      </ul>
    </div>
  )
}