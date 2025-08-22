import styles from './Header.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <input 
          placeholder='Szukaj...'
          className={styles.input}
        />
        <button>Szukaj</button>
      </div>
    </div>
  )
}
