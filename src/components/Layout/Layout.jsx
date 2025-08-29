export default function Layout(props) {
  const { header, menu, content, footer } = props

  return (
    <div>
      <div>{header}</div>
      <div className='container'>{menu}</div>
      <div className='container'>{content}</div>
      <div className='container'>{footer}</div>
    </div>
  )
}