import React from "react";
import "./StaticsCard.scss";
import { Star, Cancel, Person, Rating } from "../../icons";
function Statics() {
  return (
    <div className="staticsCard">
      <h3 className="staticsCard-heading">İstatistikler</h3>
      <div className="staticsCard-list">
        <div className="staticsCard-list-item">
          <Star />
          <div className="staticsCard-list-item-title">Tamamlanan İş</div>
          <div className="staticsCard-list-item-text">26 sipariş</div>
        </div>
        <div className="staticsCard-list-item">
          <Cancel />
          <div className="staticsCard-list-item-title">İptal İş</div>
          <div className="staticsCard-list-item-text">2 sipariş</div>
        </div>
        <div className="staticsCard-list-item">
          <Person />
          <div className="staticsCard-list-item-title">Üyelik Tarihi</div>
          <div className="staticsCard-list-item-text">03.10.2021</div>
        </div>
        <div className="staticsCard-list-item">
          <Rating />
          <div className="staticsCard-list-item-title">Değerlendirme</div>
          <div className="staticsCard-list-item-text">5 değerlendirme</div>
        </div>
      </div>
    </div>
  );
}

export default Statics;
