/** @format */

function SolInput({ data, initialdata, handleInputCahnge }) {
  let searchRover = data.rover
  let selectedrover = initialdata.rovers.find(
    (rover) => rover.name === searchRover
  )

  return (
    <>
      <label for='Sol'>
        Number of Sol (max sol is{' '}
        {`${selectedrover?.max_sol ? selectedrover.max_sol : ''}`}):
        <input
          defaultValue={1}
          type='number'
          id='sol'
          min='1'
          max={selectedrover?.max_sol ? selectedrover.max_sol : 5000}
          onChange={(e) => handleInputCahnge(e, 'sol')}
        />
      </label>
    </>
  )
}
export default SolInput
