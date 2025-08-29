import { useEffect, useState } from 'react'
import Header from '../Header/Header'
import Hotels from '../Hotels/Hotels'
import Menu from '../Menu/Menu'
import './App.css'
import LoadingIcon from '../UI/LoadingIcon/LoadingIcon'
import Searchbar from '../UI/Searchbar/Searchbar'
import Layout from '../Layout/Layout'

const initHotels = [
  {
    id: 1,
    name: 'Pod akacjami',
    city: 'Warszawa',
    rating: '8.5',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus porro illum veritatis molestiae nemo tenetur veniam.',
    image: 'https://picsum.photos/id/237/300/200',
  },
  {
    id: 2,
    name: 'Dębowy',
    city: 'Lublin',
    rating: '8.3',
    description: 'Soluta impedit placeat fuga saepe ex beatae alias maxime nobis explicabo praesentium voluptates. Dignissimos.',
    image: 'https://picsum.photos/id/238/300/200',
  }
]

function App() {
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // symulacja pobrania danych z BE
    setTimeout(() => {
      setHotels(initHotels)
      setLoading(false)
    }, 2000)
  }, [])

  const onSearch = (query) => {
    // console.log('App szukaj', query)
    const filteredHotels = initHotels
      .filter(hotel => hotel.name.toLocaleLowerCase()
        .includes(query.toLocaleLowerCase()))

    setHotels(filteredHotels)
  }

  return (
    <>
      <Layout
        header={
          <Header>
            <Searchbar onSearch={onSearch}  />
          </Header>
        }
        menu={<Menu />}
        content={
          loading
            ? <LoadingIcon />
            : <Hotels hotels={hotels} />
        }
        footer={<p>Stopka</p>}
      />
    </>
  )
}

export default App
