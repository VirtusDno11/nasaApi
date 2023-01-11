/** @format */
// import { useState, useEffect } from 'react'
// import axios from 'axios'
import Button from './UI/Button'
import SolInput from './SolInput'

import CameraInput from './CameraInput'
import styles from './VariableForm.module.css'

function VariableInput({
  initialdata,
  roverdata,
  data,
  handleInputCahnge,
  handleDataChange,
  handlFormSubmit,
  handleDataReset,
}) {
  return (
    <div className={styles.vinput}>
      <form onSubmit={handlFormSubmit}>
        <legend>Select a Rover:</legend>
        {initialdata.rovers.map((rover) => (
          <div className={styles.roverinput} key={rover.id}>
            <input
              key={rover.id}
              type='radio'
              name='rover'
              id={rover.name}
              value={rover.name}
              checked={rover.name === data.rover}
              onChange={(e) => handleInputCahnge(e, 'rover')}
            />
            <label for={rover.name}>{`${rover.name}`}</label>
          </div>
        ))}
        {
          <SolInput
            data={data}
            initialdata={initialdata}
            handleInputCahnge={handleInputCahnge}
          />
        }
        {
          <>
            <CameraInput
              data={data}
              roverdata={roverdata}
              handleInputCahnge={handleInputCahnge}
            />
            {/* <label>
              Pages:
              <input
                type='number'
                onChange={(e) => handleInputCahnge(e, 'page')}
              />
            </label> */}
          </>
        }

        {/* <Button onClick={handlFormSubmit}>Input</Button> */}
      </form>
      <Button onClick={handleDataReset}>Reset</Button>
    </div>
  )
}
export default VariableInput
