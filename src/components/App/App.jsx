import { createContext, useEffect, useState } from 'react'
import Header from '../Header/Header'
import Hotels from '../Hotels/Hotels'
import Menu from '../Menu/Menu'
import './App.css'
import LoadingIcon from '../UI/LoadingIcon/LoadingIcon'
import Searchbar from '../UI/Searchbar/Searchbar'
import Layout from '../Layout/Layout'
import Footer from '../Footer/Footer'
import ThemeButton from '../UI/ThemeButton/ThemeButton'
import ThemeContext from '../../context/ThemeContext'
import AuthContext from '../../context/AuthContext'

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
  const [themeColor, setThemeColor] = useState('primary') // danger, warning
  const [user, setUser] = useState(null)

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

  const changeColor = () => {
    setThemeColor(themeColor === 'danger' ? 'primary' : 'danger')
  }

  const header = (
    <Header>
      <div className='d-flex' style={{ gap: 10 }}>
        <Searchbar onSearch={onSearch} />
        <ThemeButton />
      </div>
    </Header>
  )
  const content = loading
    ? <LoadingIcon />
    : <Hotels hotels={hotels} />

  return (
    <>
      <ThemeContext.Provider value={{
        color: themeColor,
        changeColor,
      }}>
        <AuthContext.Provider value={{
          isAuthenticated: !!user,
          logIn: () => setUser(true),
          logOut: () => setUser(null),
        }}>
          <Layout
            header={header}
            menu={<Menu />}
            content={content}
            footer={<Footer />}
          />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
