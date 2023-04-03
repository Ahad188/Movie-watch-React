import { useState } from 'react'
 
import './App.css'
import Header from './Component/Header/Header'
import Display from './Component/Display/Display'
 import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <Header/>
       <Display/>
       <ToastContainer/>
    </div>
  )
}

export default App
