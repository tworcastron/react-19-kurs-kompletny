import { memo, useMemo } from "react"
import Hotel from "./Hotel/Hotel"

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

  return (
    <div>
      <div style={{
        border: '1px solid #cdcdcd',
        padding: 10,
      }}>
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