import { useState } from 'react'
import Header from '../Header/Header'
import Hotels from '../Hotels/Hotels'
import Menu from '../Menu/Menu'
import './App.css'

function App() {
  const [hotels, setHotels] = useState([
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
  ])

  return (
    <>
      <Header />
      <Menu />
      <Hotels hotels={hotels} />
    </>
  )
}

export default App
