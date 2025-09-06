import { useReducer, lazy, Suspense } from 'react'
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
import HotelPreview from '../../pages/HotelPreview'
import Search from '../../pages/Search'
import NotFound from '../../pages/NotFound'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'

// import Profile from '../../pages/Profile'
const Profile  = lazy(() => import('../../pages/Profile'))

function App() {
  const [state, dispatch] = useReducer(reducer, initState)

  const changeColor = () => dispatch({ type: 'change-color' })

  const header = (
    <Header>
      <div className='d-flex' style={{ gap: 10 }}>
        <Searchbar />
        <ThemeButton />
      </div>
    </Header>
  )
  const content = (
    <Suspense fallback={'Ładowanie...'}>
      <Routes>
        <Route index element={<Home state={state} dispatch={dispatch}/>} />
        <Route path='/hotel/:id' element={<HotelPreview />} />
        <Route path='/login' element={<h1>Logowanie</h1>} />
        <Route path='/register' element={<h1>Rejestracja</h1>} />
        <Route path='/szukaj' element={<Search />} />
        <Route element={<AuthenticatedRoute />}>
          <Route path='/profil' element={<Profile />}>
            <Route index element="edytuj" />
            <Route path='hotele' element="hotele" />
          </Route>
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
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
