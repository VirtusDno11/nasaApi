/** @format */

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

export default function NasaPhoto({ data, handlFormSubmit }) {
  const [dataN, setdataN] = useState(null)

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${data.rover}/photos?sol=${data.sol}&camera=${data.camera}&api_key=DBr1rIGm8dj1LupgZNAPJbMN3Vw3acQ7q2SdKruY`
      )
      .then((resp) => {
        const data2 = resp.data
        setdataN(data2)
        console.log(data2)
      })
  }, [data])

  return (
    <div>
      {dataN &&
        dataN.photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.img_src} alt={dataN.title} />
            <h2>
              photo id : {photo.id} <br /> sol:{photo.sol}
            </h2>
          </div>
        ))}
    </div>
  )
}
