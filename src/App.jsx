import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from 'flowbite-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
        
      <h1>Vite + React</h1>
      <div >
        <Button className='bg-blue' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p >
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
