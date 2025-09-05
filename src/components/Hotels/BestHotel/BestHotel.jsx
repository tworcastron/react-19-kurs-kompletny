import { memo } from "react"

function BestHotel(props) {
  console.log('render best hotel')
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
        <button onClick={() => props.onShow(props.hotel)} className="btn btn-sm btn-light">
          Pokaż
        </button>
      </div>
    </div>
  )
}

const propsAreEqual = (prev, next) => {
  return prev.hotel?.id === next.hotel?.id && prev.onShow === next.onShow
}

export default memo(BestHotel, propsAreEqual)