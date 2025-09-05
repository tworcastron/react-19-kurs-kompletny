import { createContext, useEffect, useReducer, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router"
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
import useWebsiteTitle from '../../hooks/useWebsiteTitle'

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

const reducer = (state, action) => {
  switch (action.type) {
    case 'change-color':
      return {
        ...state,
        color: state.color === 'primary' ? 'danger' : 'primary',
      }
    case 'set-loading':
      return {
        ...state,
        loading: action.isLoading,
      }
    case 'login':
      return {
        ...state,
        user: true,
      }
    case 'logout': 
      return {
        ...state,
        user: false,
      }
    default:
      throw new Error(`Nie ma takiej akcji ${action.type}`)
  }
}
const initState = {
  color: 'primary',
  loading: true,
  user: null,
}

function App() {
  useWebsiteTitle('Strona główna')
  const [hotels, setHotels] = useState([])
  // const [loading, setLoading] = useState(true)
  // const [themeColor, setThemeColor] = useState('primary') // danger, warning
  // const [user, setUser] = useState(null)

  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    // symulacja pobrania danych z BE
    setTimeout(() => {
      setHotels(initHotels)
      // setLoading(false)
      dispatch({ type: 'set-loading', isLoading: false })
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
    // sposób useState:
    // setThemeColor(themeColor === 'danger' ? 'primary' : 'danger')

    // sposób useReduer:
    dispatch({ type: 'change-color' })
  }

  const header = (
    <Header>
      <div className='d-flex' style={{ gap: 10 }}>
        <Searchbar onSearch={onSearch} />
        <ThemeButton />
      </div>
    </Header>
  )
  const content = (
    <Routes>
      <Route index element={<Hotels hotels={hotels} />} />
      <Route path='/hotel/:id' element={<h1>To jest strona hotel</h1>} />
      <Route path='/login' element={<h1>Logowanie</h1>} />
      <Route path='/register' element={<h1>Rejestracja</h1>} />
    </Routes>
  )

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{
        color: state.color,
        changeColor,
      }}>
        <AuthContext.Provider value={{
          isAuthenticated: !!state.user,
          logIn: () => dispatch({ type: 'login' }), //setUser(true),
          logOut: () => dispatch({ type: 'logout' })//setUser(null),
        }}>
          <Layout
            header={header}
            menu={<Menu />}
            content={state.loading ? <LoadingIcon /> : content}
            footer={<Footer />}
          />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
