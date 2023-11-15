/* eslint-disable react/prop-types */
const Input = ({ colorValue, setColorValue }) => {
  return (
    <>
      <form>
        <label>Add Color Name : </label>
        <input
          autoFocus
          type="text"
          placeholder="Add Color Name"
          required
          value={colorValue}
          onChange={(e) => setColorValue(e.target.value)}
        />
      </form>
    </>
  );
};
export default Input;
