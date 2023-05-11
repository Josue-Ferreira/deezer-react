import { useState } from 'react'
import './App.css'
import Album from './components/Album'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Album />
  )
}

export default App
