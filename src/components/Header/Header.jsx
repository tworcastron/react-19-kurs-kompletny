import styles from './Header.module.scss'

export default function Header(props) {
  return (
    <div className={`${styles.header} container`}>
      <div>
        {props.children}
      </div>
    </div>
  )
}
