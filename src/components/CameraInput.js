/** @format */
import { useState, useEffect } from 'react'
import axios from 'axios'
import removeDuplicates from './functions/removeDuplicates'

function CameraInput({ data, handleInputCahnge }) {
  const apiNasaKey = 'DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY'
  const nasaRoversData1Url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'
  const [initialdata1, setinitialData1] = useState(null)

  const getRoversData1 = async () => {
    let url = `${nasaRoversData1Url}${data.rover}/photos?sol=${data.sol}&api_key=${apiNasaKey}`
    console.log(url)
    axios.get(url).then((resp) => {
      const data2 = resp.data
      setinitialData1(data2)
    })
  }
  useEffect(() => {
    getRoversData1()
  }, [data.sol])

  return (
    <>
      {' '}
      <p>Chose camera :</p>
      <select onChange={(e) => handleInputCahnge(e, 'camera')}>
        {initialdata1 &&
          (initialdata1.photos.length !== 0 ? (
            removeDuplicates(
              initialdata1.photos.map((photo) => photo.camera)
            ).map((camera) => (
              <option value={camera.name}>{camera.full_name}</option>
            ))
          ) : (
            <option value=''>--Please choose another Sol--</option>
          ))}
      </select>
    </>
  )
}
export default CameraInput
