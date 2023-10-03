import { useState } from 'react'
import './css/App.css'
import Benvinidos from './components/benvinidos'
import Parcipantes from './components/participantes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
     <Parcipantes></Parcipantes>
     <Benvinidos></Benvinidos>
     <Parcipantes></Parcipantes>
    </main>
  )
}

export default App
