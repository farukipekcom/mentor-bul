import "./LeaveReviewCard.scss";
import Star from "../Stars/Stars";
import { FormInputTextareaCard } from "..";
function LeaveReviewCard() {
  return (
    <div className="leaveReview">
      <span className="leaveReview-heading">Projeyi Değerlendirin</span>
      <div className="leaveReview-item">
        <span className="leaveReview-item-title">Kalite</span>
        <span className="leaveReview-item-desc">
          Teslim edilen işin kalitesini beğendiniz mi?
        </span>
        <Star color="#E77C40" value="4" />
      </div>
      <div className="leaveReview-item">
        <span className="leaveReview-item-title">Zamanlama</span>
        <span className="leaveReview-item-desc">
          Kullanıcının işi teslim etme süresini beğendiniz mi?
        </span>
        <Star color="#E77C40" value="3" />
      </div>
      <div className="leaveReview-item">
        <span className="leaveReview-item-title">İletişim</span>
        <span className="leaveReview-item-desc">
          Kullanıcının iletişiminden memnun kaldınız mı?
        </span>
        <Star color="#E77C40" value="5" />
      </div>
      <div className="leaveReview-input">
        <FormInputTextareaCard placeholder="Yorumunuzu yazınız..." />
        <button>Gönder</button>
      </div>
    </div>
  );
}

export default LeaveReviewCard;
