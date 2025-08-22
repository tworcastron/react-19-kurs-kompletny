import Hotel from "./Hotel/Hotel"

const Hotels = () => {
  return (
    <div className="container">
      <div style={{
        border: '1px solid #cdcdcd',
        padding: 10,
      }}>
        <h2>Oferty:</h2>
        <Hotel />
        <Hotel />
        <Hotel />
      </div>
    </div>
  )
}

export default Hotels 