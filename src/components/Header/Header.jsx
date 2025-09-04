import withMousePosition from '../../hoc/withMousePosition'
import styles from './Header.module.scss'

function Header(props) {
  const paralaxStyle = {
    transform: `translate(
      ${props.mouseX / -50}px,
      ${props.mouseY / 120}px
    )`
  }

  return (
    <div className={`${styles.header}`}>
      <div className={styles.headerImage} style={paralaxStyle} />
      <div>
        {props.children}
      </div>
    </div>
  )
}

export default withMousePosition(Header)