import { memo, useCallback, useMemo } from "react"
import Hotel from "./Hotel/Hotel"
import BestHotel from "./BestHotel/BestHotel"

// const slowFunction = (count) => {
//   console.log('start')
//   for (let i = 0; i < 2500000000; i++) {}
//   console.log('koniec')
//   return count
// }

const Hotels = (props) => {
  // wykonuje obliczenia ponownie tylko gdy props.hotels.length się zmienia 
  // const count = useMemo(
  //   () => slowFunction(props.hotels.length),
  //   [props.hotels.length]
  // )

  const count = props.hotels.length
  const bestHotel = count > 1
    ? [...props.hotels].sort((a,b) => b.rating - a.rating)[0]
    : null
  const showBestHotel = () => {
    ///
  }

  return (
    <div>
      <BestHotel hotel={bestHotel} onShow={showBestHotel} />

      <div style={{ padding: '10px 0' }}>
        <h2>Oferty ({ count }):</h2>
        {props.hotels.map((hotel) => (
          <Hotel {...hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  )
}

// const propsAreEqual = (prevProps, nextProps) => {
//   // definiuje czy komponent ma się znowu wyrenderować / odświeżyć
//   // true - brak odświeżenia
//   // false - odwieżenie
//   return prevProps.hotels.length === nextProps.hotels.length
// }

// export default memo(Hotels, propsAreEqual)
export default Hotels