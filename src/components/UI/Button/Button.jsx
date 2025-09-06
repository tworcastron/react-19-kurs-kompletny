export default function Button(props) {
  const { loading, children } = props

  return loading
    ? <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm"></span>
        <span role="status"> {children}...</span>
      </button>
    : <button type="submit" className="btn btn-primary">{children}</button>
}