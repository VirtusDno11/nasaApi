/** @format */
import { useState, useEffect } from 'react'
import axios from 'axios'
import removeDuplicates from './functions/removeDuplicates'

function SolsCameras({ data, handleInputCahnge }) {
  console.log(data)
  const apiNasaKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'
  const nasaRoversData1Url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
  const [initialdata1, setinitialData1] = useState(null)

  const getRoversData1 = async () => {
    let url = `${nasaRoversData1Url}${data.rover}/photos?sol=${data.sol}&api_key=${apiNasaKey}`
    console.log(url)
    axios.get(url).then((resp) => {
      const data2 = resp.data
      setinitialData1(data2)
      console.log(data2)
    })
  }
  useEffect(() => {
    getRoversData1()
  }, [data])

  return (
    <>
      <select onChange={(e) => handleInputCahnge(e, 'camera')}>
        <option value=''>--Please choose a camera--</option>
        {initialdata1 &&
          removeDuplicates(
            initialdata1.photos.map((photo) => photo.camera)
          ).map((camera) => (
            <option value={camera.name}>{camera.full_name}</option>
          ))}
      </select>
    </>
  )
}
export default SolsCameras
