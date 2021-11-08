import "./Offer.scss";
import { Star } from "../../icons";
import { user1 } from "../../images";
function Offer() {
  return (
    <div className="offer">
      <div className="offer-header">
        <img src={user1} alt="" className="offer-header-photo" />
        <div className="offer-header-profile">
          <span className="offer-header-profile-username">farukipekcom</span>
          <div className="offer-header-profile-rating">
            <Star /> 4.82 <span>(12 değerlendirme)</span>
          </div>
        </div>
        <div className="offer-header-price">
          120 <span className="tl">₺</span>
        </div>
      </div>
      <div className="offer-detail">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint.{" "}
      </div>
    </div>
  );
}

export default Offer;
