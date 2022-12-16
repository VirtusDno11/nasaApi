/** @format */

function InputT({ data }, { onChange }) {
  function handlFormSubmit(event) {
    event.preventDefault()
  }
  function handleInputCahnge(e, name) {
    onChange({ ...data, [name]: e.target.value })
  }

  return (
    <>
      <h1>Input Form</h1>
      <form onSubmit={handlFormSubmit}>
        <legend>Select a Rover:</legend>

        <div>
          <input
            type='radio'
            name='rover'
            id='Curiosity'
            value='Curiosity'
            onChange={(e) => handleInputCahnge(e, 'rover')}
          />
          <label for='Curiosity'>Curiosity</label>

          <input
            type='radio'
            name='rover'
            id='Opportunity'
            value='Opportunity'
            onChange={(e) => handleInputCahnge(e, 'rover')}
          />
          <label for='Opportunity'>Opportunity</label>

          <input
            type='radio'
            name='rover'
            id='Spirit'
            value='Spirit'
            onChange={(e) => handleInputCahnge(e, 'rover')}
          />
          <label for='Spirit'>Spirit</label>
        </div>

        <label for='Sol'>
          Number of Sol :
          <input
            type='number'
            id='sol'
            min='0'
            max='10'
            onChange={(e) => handleInputCahnge(e, 'sol')}
          />
        </label>
        <br />
        <select onChange={(e) => handleInputCahnge(e, 'camera')}>
          <option value=''>--Please choose a camera--</option>
          <option value='FHAZ'>Front Hazard Avoidance Camera </option>
          <option value='RHAZ'>Rear Hazard Avoidance Camera </option>
          <option value='NAVCAM'>Navigation Camera </option>
          {data.rover === 'Curiosity' ? (
            <>
              <option value='MAST'>Mast Camera </option>
              <option value='CHEMCAM'>Chemistry and Camera Complex </option>
              <option value='MAHLI'>Mars Hand Lens Imager </option>
              <option value='MARDI'>Mars Descent Imager</option>
            </>
          ) : (
            ''
          )}
          {data.rover === 'Opportunity' || data.rover === 'Spirit' ? (
            <>
              <option value='PANCAM'>Panoramic Camera </option>
              <option value='MINITES'>
                Miniature Thermal Emission Spectrometer
              </option>
            </>
          ) : (
            ''
          )}
        </select>

        <label>
          Pages:
          <input
            type='number'
            value={data.page}
            onChange={(e) => handleInputCahnge(e, 'page')}
          />
        </label>

        <button type='submit'>Input</button>
      </form>
    </>
  )
}
export default InputT
