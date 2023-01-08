/** @format */
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import NasaPhoto from './components/Nasaphoto'
import VariableInput from './components/VariableInput'
// import LoadInput from './components/LoadInput'

function App() {
  const [initialdata, setinitialData] = useState(null)
  const nasaRoversDataUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers'
  const apiNasaKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'

  const getRoversData = async () => {
    axios.get(`${nasaRoversDataUrl}?api_key=${apiNasaKey}`).then((resp) => {
      const data1 = resp.data
      setinitialData(data1)
      console.log(data1)
    })
  }
  useEffect(() => {
    getRoversData()
  }, [])

  function handlFormSubmit(event) {
    event.preventDefault()
  }
  const [data, setData] = useState({
    rover: '',
    sol: '',
    camera: '',
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
      {initialdata && (
        <VariableInput
          initialdata={initialdata}
          apiNasaKey={apiNasaKey}
          data={data}
          handleDataChange={handleDataChange}
          handleInputCahnge={handleInputCahnge}
          handleDataReset={handleDataReset}
          handlFormSubmit={handlFormSubmit}
        />
      )}
      {data.camera && <NasaPhoto data={data}></NasaPhoto>}
    </div>
  )
}

export default App
