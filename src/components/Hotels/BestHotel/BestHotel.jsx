import moment from "moment"
import { memo, useEffect, useState } from "react"

function BestHotel(props) {
  const endTime = moment().add(23, 'minutes').add(34, 'seconds')
  const [time, setTime] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const leftTime = endTime.diff(moment()) / 1000
      const min = Math.round(leftTime / 60)
      const sec = Math.round(leftTime % 60)

      setTime(`minut: ${min}, sekund: ${sec}`)
    }, 1000)

    return () => {
      // console.log('unmounted best hotel')
      clearInterval(interval)
    }
  }, [])

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
        <p>Do końca oferty pozostało: {time}</p>
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