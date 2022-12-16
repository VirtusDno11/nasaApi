/** @format */
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function NasaPhoto({ data }) {
  const [photoData, setPhotoData] = useState(null)

  useEffect(() => {
    fetchPhoto()

    async function fetchPhoto() {
      const dataN = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${data.rover}/photos?sol=${data.sol}&camera=${data.camera}&page=${data.page}&api_key=DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY`
      )

      setPhotoData(dataN.data.photos)
      console.log(dataN.data.photos)
    }
  }, [])
  if (!photoData) return <h1>Loading..</h1>
  return (
    <div>
      <img src={photoData.url} alt={photoData.title} />
      <h2>
        {photoData.title} <br /> date:{photoData.date}
      </h2>
    </div>
  )
}
