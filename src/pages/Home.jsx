import { useEffect } from "react"
import { initHotels } from "../reducer"
import LoadingIcon from '../components/UI/LoadingIcon/LoadingIcon'
import Hotels from '../components/Hotels/Hotels'
import useWebsiteTitle from '../hooks/useWebsiteTitle'

export default function Home({ dispatch, state }) {
  useWebsiteTitle('Strona główna')

  useEffect(() => {
    // symulacja pobrania danych z BE
    setTimeout(() => {
      dispatch({ type: 'set-hotels', hotels: initHotels })
      dispatch({ type: 'set-visible-hotels', hotels: initHotels })
      dispatch({ type: 'set-loading', isLoading: false })
    }, 500)
  }, [])

  if (state.loading) return <LoadingIcon /> 

  return (
    <Hotels hotels={state.visibleHotels} />
  )
}