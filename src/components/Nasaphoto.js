/** @format */

import React from 'react'
import styles from './Nasaphoto.module.css'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'

export default function NasaPhoto({ roverdata, data }) {
  return (
    <div className={styles.nasamain}>
      {roverdata &&
        (data.camera === ''
          ? roverdata.photos.map((photo) => (
              <div key={photo.id}>
                <img src={photo.img_src} alt={roverdata.title} />
                <h2>
                  photo id : {photo.id} <br /> sol:{photo.sol}
                </h2>
              </div>
            ))
          : roverdata.photos
              .filter((photo) => photo.camera.name === data.camera)
              .map((photo) => (
                <div key={photo.id}>
                  <img src={photo.img_src} alt={roverdata.title} />
                  <h2>
                    photo id : {photo.id} <br /> sol:{photo.sol}
                  </h2>
                </div>
              )))}
    </div>
  )
}
