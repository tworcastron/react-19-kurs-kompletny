import { useEffect } from "react"
import { initHotels } from "../reducer"
import LoadingIcon from '../components/UI/LoadingIcon/LoadingIcon'
import Hotels from '../components/Hotels/Hotels'
import useWebsiteTitle from '../hooks/useWebsiteTitle'
import axios from "../axios"
import { objectToArrayWithId } from "../lib/objects"

export default function Home({ dispatch, state }) {
  useWebsiteTitle('Strona główna')

  const fetchHotels = async () => {
    const res = await axios.get('/hotels.json')
    const hotels = objectToArrayWithId(res.data)
      .filter(hotel => hotel.status === '1')

    dispatch({ type: 'set-visible-hotels', hotels })
    dispatch({ type: 'set-loading', isLoading: false })
  }

  useEffect(() => {
    fetchHotels()
  }, [])

  if (state.loading) return <LoadingIcon /> 

  return (
    <Hotels hotels={state.visibleHotels} />
  )
}