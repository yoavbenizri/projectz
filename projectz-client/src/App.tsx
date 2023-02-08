import { useState } from 'react'
import './App.css'
import ChatRoom from './ChatRoom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ChatRoom/>
  )
}

export default App
