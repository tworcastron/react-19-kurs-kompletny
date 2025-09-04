export default function Fragment(props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}