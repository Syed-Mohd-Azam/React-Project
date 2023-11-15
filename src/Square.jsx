/* eslint-disable react/prop-types */
const Square = ({ colorValue }) => {
  return (
    <>
      <section className="square" style={{ backgroundColor: colorValue }}>
        <p>{colorValue ? colorValue : "Empty Color Value"}</p>
      </section>
    </>
  );
};
export default Square;
