import Rating from "react-star-rating-lite";
import "./Stars.scss";
function Star({ color, value }) {
  function onClickHandler(ratedVal) {
    console.log("Selected Rating", ratedVal);
  }
  return (
    <>
      <Rating value={value} readonly onClick={onClickHandler} color={color} />
    </>
  );
}

export default Star;
