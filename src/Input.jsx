/* eslint-disable react/prop-types */
import colorNames from "colornames";
const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
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
          onChange={(e) => {
            setColorValue(e.target.value.to);
            setHexValue(colorNames(e.target.value));
          }}
        />
        <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
          Toggle Text Color
        </button>
      </form>
    </>
  );
};
export default Input;
