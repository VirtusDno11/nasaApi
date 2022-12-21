/** @format */
// import NasaPhoto from './component/Nasaphoto'
import './App.css'
import InputT from './component/InputT'
import initialdata1 from './component/initialdata1.json'
import LoadInput from './component/LoadInput'
// import { VariableInput } from './component/VariableInput'
import { useState } from 'react'
import VariableInput from './component/VariableInput'

function App() {
  const nasaRoversDataUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers'
  const apiNasaKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'
  const [initialdata, setinitialupdata] = useState(null)

  const InitialDataChange = (initialdata) => {
    setinitialupdata(initialdata)
  }

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
      <LoadInput
        initialdata={initialdata}
        InitialDataChange={InitialDataChange}
        apiNasaKey={apiNasaKey}
        nasaRoversDataUrl={nasaRoversDataUrl}></LoadInput>
      <VariableInput
        initialdata1={initialdata1}
        data={data}
        handleDataChange={handleDataChange}></VariableInput>

      {/* <InputT handleDataChange={handleDataChange} initialdata={initialdata} data={data}></InputT> */}

      {/* <NasaPhoto data={data} /> */}
    </div>
  )
}

export default App
