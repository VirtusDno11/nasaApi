/** @format */
import axios from 'axios'
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
export default LoadInput
