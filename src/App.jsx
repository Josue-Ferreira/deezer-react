import { useState } from 'react'
import './App.css'
import Album from './components/Album'
import NavBar from './components/NavBar'
import data from './assets/data.js'

function App() {
  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-4 gap-4" style={{margin: '10px'}}>
        {data.map((album) => (
          <Album key={album.title_short} album={album}/>
        ))}
      </div>
    </div>
  )
}

export default App
