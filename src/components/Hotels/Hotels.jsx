import Hotel from "./Hotel/Hotel"

const Hotels = (props) => {
  return (
    <div className="container">
      <div style={{
        border: '1px solid #cdcdcd',
        padding: 10,
      }}>
        <h2>Oferty:</h2>
        {props.hotels.map((hotel) => (
          <Hotel {...hotel} key={hotel.id} />
        ))}
      </div>
    </div>
  )
}

export default Hotels 