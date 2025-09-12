export default function Button(props) {
  const { loading, children, disabled } = props

  return loading
    ? <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm"></span>
        <span role="status"> {children}...</span>
      </button>
    : <button type="submit" className="btn btn-primary" disabled={disabled}>{children}</button>
}