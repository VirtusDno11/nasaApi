/** @format */
// import { useState, useEffect } from 'react'
// import axios from 'axios'
import Button from './UI/Button'
import RoverSols from './RoverSols'

import SolsCameras from './SolsVariableCameras'
import styles from './VariableInput.module.css'

function VariableInput({
  initialdata,
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
              onChange={(e) => handleInputCahnge(e, 'rover')}
            />
            <label for={rover.name}>{`${rover.name}`}</label>
          </div>
        ))}
        {data.rover && (
          <RoverSols
            data={data}
            initialdata={initialdata}
            handleInputCahnge={handleInputCahnge}
          />
        )}
        {data.sol && (
          <>
            <SolsCameras data={data} handleInputCahnge={handleInputCahnge} />
            {/* <label>
              Pages:
              <input
                type='number'
                onChange={(e) => handleInputCahnge(e, 'page')}
              />
            </label> */}
          </>
        )}

        {/* <Button onClick={handlFormSubmit}>Input</Button> */}
      </form>
      {data.rover && <Button onClick={handleDataReset}>Reset</Button>}
    </div>
  )
}
export default VariableInput
