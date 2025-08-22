export default function Searchbar() {
  const styles = { borderRadius: 8 }

  return (
    <>
      <input 
        placeholder='Szukaj...'
        style={styles}
        className="input"
      />
      <button className="button">Szukaj</button>
    </>
  )
}