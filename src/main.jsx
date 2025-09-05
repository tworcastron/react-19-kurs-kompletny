import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

// useState()

function TestHook() {
  return (
    <>
      <h1>Test hook!</h1>
      <input type='text' />
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestHook />
    {/* <App /> */}
  </StrictMode>,
)
