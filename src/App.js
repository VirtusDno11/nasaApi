/** @format */
// import NasaPhoto from './component/Nasaphoto'
import './App.css'
// import InputT from './component/InputT'
import initialdata1 from './component/initialdata1.json'
// import LoadInput from './component/LoadInput'
// import { VariableInput } from './component/VariableInput'
import { useState } from 'react'
import axios from 'axios'
import VariableInput from './component/VariableInput'

function App() {
  const nasaRoversDataUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers'
  const apiNasaKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'

  const [initialdata, setinitialData] = useState(null)

  const InitialDataChange = (initialdata) => {
    setinitialData(initialdata.rovers)
  }
  async function LoadInput({
    initialdata,
    InitialDataChange,
    nasaRoversDataUrl,
    apiNasaKey,
  }) {
    const getRoversData = async () => {
      return await axios.get(`${nasaRoversDataUrl}?api_key=${apiNasaKey}`)
    }

    InitialDataChange(initialdata)
    console.log(initialdata)
  }

  function handlFormSubmit(event) {
    event.preventDefault()
  }
  const [data, setData] = useState({
    rover: '',
    sol: '',
    camera: '',
    page: '',
  })
  const handleDataChange = (data) => {
    setData(data)
  }
  function handleInputCahnge(e, name) {
    handleDataChange({ ...data, [name]: e.target.value })
  }
  function handleDataReset() {
    setData({
      rover: '',
      sol: '',
      camera: '',
      page: '',
    })
  }

  return (
    <div className='App'>
      {initialdata1 && (
        <VariableInput
          initialdata1={initialdata1}
          data={data}
          handleDataChange={handleDataChange}
          handleInputCahnge={handleInputCahnge}
          handleDataReset={handleDataReset}
          handlFormSubmit={handlFormSubmit}></VariableInput>
      )}

      {/* <InputT handleDataChange={handleDataChange} initialdata={initialdata} data={data}></InputT> */}

      {/* <NasaPhoto data={data} /> */}
    </div>
  )
}

export default App
