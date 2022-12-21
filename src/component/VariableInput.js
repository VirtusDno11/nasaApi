/** @format */
// import initialdata1 from './initialdata1.js'

function VariableInput([initialdata1, data, handleDataChange]) {
  function handlFormSubmit(event) {
    event.preventDefault()
  }
  function handleInputCahnge(e, name) {
    console.log(name)
    handleDataChange({ ...data, [name]: e.target.value })
  }

  return (
    <>
      <h2>Choose Rover</h2>
      <form onSubmit={handlFormSubmit}>
        <legend>Select a Rover:</legend>
        {initialdata1.rovers.map((rover) => (
          <div className='rovers' key={rover.id}>
            <input
              type='radio'
              name='rover'
              id={rover.name}
              value={rover.name}
              onChange={(e) => handleInputCahnge(e, 'rover')}
            />
            <label for={rover.name}>{`${rover.name}`}</label>

            <label for='Sol'>
              Number of Sol (mas sol is {rover.max_sol}):
              <input
                type='number'
                id='sol'
                min='1'
                max={rover.max_sol}
                onChange={(e) => handleInputCahnge(e, 'sol')}
              />
            </label>
            <select onChange={(e) => handleInputCahnge(e, 'camera')}>
              <option value=''>--Please choose a camera--</option>
              {rover.cameras.map((camera) => (
                <option value={camera.name}>{camera.full_name}</option>
              ))}
            </select>

            <label>
              Pages:
              <input
                type='number'
                onChange={(e) => handleInputCahnge(e, 'page')}
              />
            </label>

            <button type='submit'>Input</button>
          </div>
        ))}
      </form>
    </>
  )
}

export default VariableInput
