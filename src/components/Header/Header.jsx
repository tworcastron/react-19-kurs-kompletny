import withMousePosition from '../../hoc/withMousePosition'
import styles from './Header.module.scss'

function Header(props) {
  return (
    <div className={`${styles.header}`}>
      <div>
        {props.mouseX} {props.mouseY}
        {props.children}
      </div>
    </div>
  )
}

export default withMousePosition(Header)