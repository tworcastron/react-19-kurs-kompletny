export default function BestHotel(props) {
  if (!props.hotel) return null

  return (
    <div className="card bg-success text-white">
      <div className="card-header">
        Najlepsza oferta!
      </div>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.hotel.name}</h5>
          <p>Ocena: {props.hotel.rating}</p>
        </div>
        <button onClick={props.onShow} className="btn btn-sm btn-light">
          Pokaż
        </button>
      </div>
    </div>
  )
}