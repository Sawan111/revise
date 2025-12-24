import { useState } from 'react'
import './App.css'
import './componets/cards'
import Card from './componets/cards'
import './componets/card.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="para">
       <p id="para"> where i am {Card}</p>
      </div>
      <div className="cards"> 
        
        <Card/>
        <Card/>
      
      
      </div>
      
      <div className="card">



        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
      
    </>
  )
}

export default App
