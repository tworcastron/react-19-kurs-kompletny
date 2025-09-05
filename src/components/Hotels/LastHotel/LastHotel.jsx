export default function LastHotel(props) {
  return (
    <div className="card bg-light mb-2">
      <div className="card-header">
        Ostatnio oglądałeś ten hotel. Wciąż zainteresowany?
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.hotel.name}</h5>
          <p><span className="badge text-bg-dark">{props.hotel.city}</span></p>
        </div>
        <button onClick={props.onYes} className="btn btn-sm btn-dark me-2">
          Tak!
        </button>
        <button onClick={props.onNo} className="btn btn-sm btn-dark">
          Nie
        </button>
      </div>
    </div>
  )
}