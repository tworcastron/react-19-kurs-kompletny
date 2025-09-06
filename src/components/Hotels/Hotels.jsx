import { memo, useCallback, useMemo } from "react"
import Hotel from "./Hotel/Hotel"
import BestHotel from "./BestHotel/BestHotel"
import LastHotel from "./LastHotel/LastHotel"
import useLocalStorage from "../../hooks/useLocalStorage"

// const slowFunction = (count) => {
//   console.log('start')
//   for (let i = 0; i < 2500000000; i++) {}
//   console.log('koniec')
//   return count
// }

const Hotels = (props) => {
  const [lastHotel, setLastHotel] = useLocalStorage('last-hotel', null)
  // wykonuje obliczenia ponownie tylko gdy props.hotels.length się zmienia 
  // const count = useMemo(
  //   () => slowFunction(props.hotels.length),
  //   [props.hotels.length]
  // )

  const count = props.hotels.length
  const bestHotel = count > 1
    ? [...props.hotels].sort((a,b) => b.rating - a.rating)[0]
    : null

  const showHotel = (id) => {
    setLastHotel(props.hotels.find(x => x.id === id))
  }

  return (
    <div>
      {lastHotel && (
        <LastHotel hotel={lastHotel} onNo={() => setLastHotel(null)} />
      )}

      {bestHotel && (
        <BestHotel hotel={bestHotel} />
      )}

      <div style={{ padding: '10px 0' }}>
        <h2>Oferty ({ count }):</h2>
        {props.hotels.map((hotel) => (
          <Hotel {...hotel} key={hotel.id} onShow={showHotel} />
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