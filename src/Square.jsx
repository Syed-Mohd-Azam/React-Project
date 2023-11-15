/* eslint-disable react/prop-types */
const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <>
      <section
        className="square"
        style={{
          backgroundColor: colorValue,
          color: isDarkText ? "#000" : "#FFF",
        }}
      >
        <p>Color : {colorValue ? colorValue : "Empty Color Value"}</p>
        <p>Hex Value : {hexValue ? hexValue : null}</p>
      </section>
    </>
  );
};
export default Square;
