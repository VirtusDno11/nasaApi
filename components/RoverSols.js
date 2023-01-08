/** @format */

function RoverSols({ data, initialdata, handleInputCahnge }) {
  let searchRover = data.rover
  let selectedrover = initialdata.rovers.find(
    (rover) => rover.name === searchRover
  )
  return (
    <>
      <label for='Sol'>
        Number of Sol (max sol is {`${selectedrover.max_sol}`}):
        <input
          type='number'
          id='sol'
          min='1'
          max={selectedrover.max_sol}
          onChange={(e) => handleInputCahnge(e, 'sol')}
        />
      </label>
    </>
  )
}
export default RoverSols
