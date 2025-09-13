import { Link, NavLink } from 'react-router'
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
          <NavLink
            to="/"
            // className={({ isActive }) => isActive ? styles.menuItemActive : ''}
          >Home</NavLink>
        </li>
        {user ? (
          <>
            <li className={styles.menuItem}>
              <NavLink to="profil">Mój profil</NavLink>
            </li>
            <li className={styles.menuItem}>
              <a href="#" onClick={logOut}>Wyloguj</a>
            </li>
          </>
        ) : (
          <>
            <li className={styles.menuItem}>
              <NavLink to="logowanie">Zaloguj</NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink to="rejestracja">Rejestracja</NavLink>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}