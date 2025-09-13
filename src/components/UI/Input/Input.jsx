export default function Input(props) {
  switch (props.type) {
    case 'select': return <InputSelect {...props} />
    case 'text': return <InputText {...props} />
    case 'textarea': return <InputTextarea {...props} />
    case 'file': return <InputFile {...props} />
    case 'checkbox': return <InputCheckbox {...props} />
    default: return <InputText {...props} />
  }
}

function InputText(props) {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <input className={`form-control ${props.error ? 'is-invalid' : ''}`} 
        value={props.value}
        onChange={e => props.onChange(e.target.value)} />
      <div className="invalid-feedback">{props.error}</div>
    </div>
  )
}
function InputSelect(props) {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <select className={`form-select ${props.error ? 'is-invalid' : ''}`} 
        value={props.value}
        onChange={e => props.onChange(e.target.value)}>
          {props.options.map(opt => (
            <option value={opt.value}>{opt.label}</option>
          ))}
        </select>
      <div className="invalid-feedback">{props.error}</div>
    </div>
  )
}
function InputTextarea(props) {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <textarea className={`form-control ${props.error ? 'is-invalid' : ''}`} 
        value={props.value}
        onChange={e => props.onChange(e.target.value)} />
      <div className="invalid-feedback">{props.error}</div>
    </div>
  )
}
function InputFile(props) {
  return (
    <div className="mb-3">
      <label className="form-label">{props.label}</label>
      <input type="file" className={`form-control ${props.error ? 'is-invalid' : ''}`}
        onChange={e => props.onChange(e.target.files[0])}
        accept="image/*" />
      <div className="invalid-feedback">{props.error}</div>
    </div>
  )
}
function InputCheckbox(props) { // udogodnienia: ['tv', 'parking']
  const onCheckboxChange = (val, isChecked) => {
    const newValue = isChecked
      ? [...props.value, val]
      : props.value.filter(x => x !== val)

    props.onChange(newValue)
  }
  return (
    <>
      <h4>{props.label}</h4>
      {props.options?.map(opt => (
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input"
              checked={props.value?.includes(opt.value)}
              onChange={e => onCheckboxChange(opt.value, e.target.checked)}
            />
            {opt.label}
          </label>
        </div>
      ))}
      {props.error && (
        <div className="alert alert-danger">{props.error}</div>
      )}
    </>
  )
}