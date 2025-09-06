import { useReducer } from 'react'
import { BrowserRouter, Routes, Route } from "react-router"
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import './App.css'
import Searchbar from '../UI/Searchbar/Searchbar'
import Layout from '../Layout/Layout'
import Footer from '../Footer/Footer'
import ThemeButton from '../UI/ThemeButton/ThemeButton'
import ThemeContext from '../../context/ThemeContext'
import AuthContext from '../../context/AuthContext'
import { reducer, initState } from '../../reducer'
import Home from '../../pages/Home'

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  const onSearch = (query) => {
    const filteredHotels = state.hotels
      .filter(hotel => hotel.name.toLocaleLowerCase()
        .includes(query.toLocaleLowerCase()))

    dispatch({ type: 'set-visible-hotels', hotels: filteredHotels })
  }

  const changeColor = () => dispatch({ type: 'change-color' })

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
      <Route index element={<Home state={state} dispatch={dispatch}/>} />
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
          logIn: () => dispatch({ type: 'login' }),
          logOut: () => dispatch({ type: 'logout' })
        }}>
          <Layout
            header={header}
            menu={<Menu />}
            content={content}
            footer={<Footer />}
          />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  )
}

export default App
