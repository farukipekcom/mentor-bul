import "./Reviewed.scss";
import { Reliability, Communication, Timing } from "../../icons";
import Star from "../Stars/Stars";
import { LeaveReviewCard } from "../";
import { useState } from "react";
function Reviewed() {
  const [reviewed, setReviewed] = useState(0);
  return (
    <div className="reviewed">
      {reviewed ? (
        <>
          <span className="reviewed-heading">Değerlendirmeniz</span>
          <div className="reviewsCard-summary">
            <div className="reviewsCard-summary-boxes">
              <div className="reviewsCard-summary-boxes-box">
                <div className="reviewsCard-summary-boxes-box-icon">
                  <Reliability />
                </div>
                <span className="reviewsCard-summary-boxes-box-title">
                  Güvenilirlik
                </span>
                <div className="reviewsCard-summary-boxes-box-rating">
                  <Star color="#666" value="5" />
                </div>
              </div>
              <div className="reviewsCard-summary-boxes-box">
                <div className="reviewsCard-summary-boxes-box-icon">
                  <Timing />
                </div>
                <span className="reviewsCard-summary-boxes-box-title">
                  Zamanlama
                </span>
                <div className="reviewsCard-summary-boxes-box-rating">
                  <Star color="#666" value="4" />
                </div>
              </div>
              <div className="reviewsCard-summary-boxes-box">
                <div className="reviewsCard-summary-boxes-box-icon">
                  <Communication />
                </div>
                <span className="reviewsCard-summary-boxes-box-title">
                  İletişim
                </span>
                <div className="reviewsCard-summary-boxes-box-rating">
                  <Star color="#666" value="5" />
                </div>
              </div>
              <div className="reviewsCard-summary-boxes-box">
                <span className="reviewsCard-summary-boxes-box-text">
                  Ortalama <br />
                  <span>Değerlendirme</span>
                </span>
                <span className="reviewsCard-summary-boxes-box-sum">4.75</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <LeaveReviewCard />
      )}
    </div>
  );
}

export default Reviewed;
