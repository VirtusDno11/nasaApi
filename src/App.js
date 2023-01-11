/** @format */
import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import NasaPhoto from './components/Nasaphoto'
import VariableForm from './components/VariableForm'
// import LoadInput from './components/LoadInput'

function App() {
  const [initialdata, setinitialData] = useState(null)
  const nasaRoversDataUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers'
  const apiNasaKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'

  const getRoversData = async () => {
    axios.get(`${nasaRoversDataUrl}?api_key=${apiNasaKey}`).then((resp) => {
      const data1 = resp.data
      setinitialData(data1)
    })
  }
  useEffect(() => {
    getRoversData()
  }, [])

  function handlFormSubmit(event) {
    event.preventDefault()
  }
  const [data, setData] = useState({
    rover: 'Curiosity',
    sol: '1',
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
      rover: 'Curiosity',
      sol: '1',
      camera: '',
      page: '',
    })
  }
  function dataCameraReset() {
    data.camera = ''
  }

  const nasaRoversData1Url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
  const [roverdata, detRoverdata] = useState(null)

  const getRoversData1 = async () => {
    let url = `${nasaRoversData1Url}${data.rover}/photos?sol=${data.sol}&api_key=${apiNasaKey}`
    axios.get(url).then((resp) => {
      const data2 = resp.data
      detRoverdata(data2)
    })
  }
  useEffect(() => {
    getRoversData1()
    dataCameraReset()
    console.log(roverdata.photos)
  }, [data.sol || data.rover])

  return (
    <div className='App'>
      {initialdata && (
        <VariableForm
          initialdata={initialdata}
          roverdata={roverdata}
          apiNasaKey={apiNasaKey}
          data={data}
          handleDataChange={handleDataChange}
          handleInputCahnge={handleInputCahnge}
          handleDataReset={handleDataReset}
          handlFormSubmit={handlFormSubmit}
        />
      )}
      {data.sol && <NasaPhoto roverdata={roverdata} data={data}></NasaPhoto>}
    </div>
  )
}

export default App
