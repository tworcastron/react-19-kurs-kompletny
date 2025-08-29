import styles from './Menu.module.css'

export default function Menu() {
  return (
    <div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href="#">Home</a>
        </li>
      </ul>
    </div>
  )
}