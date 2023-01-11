/** @format */
// import { useState, useEffect } from 'react'
// import axios from 'axios'
import removeDuplicates from './functions/removeDuplicates'

function CameraInput({ roverdata, handleInputCahnge }) {
  return (
    <>
      {' '}
      <p>Chose camera :</p>
      <select onChange={(e) => handleInputCahnge(e, 'camera')}>
        {roverdata &&
          (roverdata.photos.length !== 0 ? (
            <option value=''>All cameras</option>
          ) : (
            <option value=''>--Please choose another Sol--</option>
          ))}
        {roverdata.photos.length !== 0 &&
          removeDuplicates(roverdata.photos.map((photo) => photo.camera)).map(
            (camera) => (
              <option key={camera.id} value={camera.name}>
                {camera.full_name}
              </option>
            )
          )}
      </select>
    </>
  )
}
export default CameraInput
