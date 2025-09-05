import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

let globalState = []
let idx = 0
// console.log('init', globalState, idx)

function useState(initValue) {
  const id = idx++

  if (globalState[id]) return globalState[id]

  const setValue = (val) => {
    globalState[id][0] = val
    // console.log('set', globalState, idx)
    render()
  }
  // console.log('get', globalState, idx)

  const state = [initValue, setValue]
  globalState[id] = state

  return state
}

function TestHook() {
  const [input, setInput] = useState('start')
  const [text, setText] = useState('drugi stan')
  return (
    <>
      <h1>Test hook!</h1>
      <input type='text' 
        value={input} onChange={e => setInput(e.target.value)} />
      <input type='text' 
        value={text} onChange={e => setText(e.target.value)} />
      <p>{input}</p>
      <p>{text}</p>
    </>
  )
}

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <TestHook />
//     {/* <App /> */}
//   </StrictMode>,
// )
const root = createRoot(document.getElementById('root'))
function render() {
  idx = 0
  root.render(<TestHook />)
}
render()
