/** @format */
// import NasaPhoto from './component/Nasaphoto'
import './App.css'
import InputT from './component/InputT'
import { useState } from 'react'

function App() {
  const [data, setData] = useState({
    rover: '',
    sol: '',
    camera: '',
    page: '',
  })

  const handleDataChange = (data) => {
    setData(data)
    console.log(data)
  }

  return (
    <div className='App'>
      <InputT handleDataChange={handleDataChange} data={data}></InputT>

      {/* <NasaPhoto data={data} /> */}
    </div>
  )
}

export default App
