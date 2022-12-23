/** @format */
// import initialdata1 from './initialdata1.js'

function VariableInput({
  initialdata1,
  data,
  handleInputCahnge,
  handleDataChange,
  handlFormSubmit,
  handleDataReset,
}) {
  let searchRover = data.rover
  let selectedrover = initialdata1.rovers.find(
    (rover) => rover.name === searchRover
  )

  return (
    <>
      <form onSubmit={handlFormSubmit}>
        <legend>Select a Rover:</legend>
        {initialdata1.rovers.map((rover) => (
          <div className='rovers' key={rover.id}>
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
          <>
            <select onChange={(e) => handleInputCahnge(e, 'camera')}>
              <option value=''>--Please choose a camera--</option>
              {selectedrover.cameras.map((camera) => (
                <option value={camera.name}>{camera.full_name}</option>
              ))}
            </select>{' '}
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
            <label>
              Pages:
              <input
                type='number'
                onChange={(e) => handleInputCahnge(e, 'page')}
              />
            </label>
          </>
        )}

        <button type='submit'>Input</button>
        <button type='reset' onClick={handleDataReset}>
          reset
        </button>
      </form>
    </>
  )
}
export default VariableInput
