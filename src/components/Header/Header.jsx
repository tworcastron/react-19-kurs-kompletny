import styles from './Header.module.scss'

export default function Header(props) {
  return (
    <div className={`${styles.header}`}>
      <div>
        {props.children}
      </div>
    </div>
  )
}
