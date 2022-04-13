import React from "react";
import "./StaticsCard.scss";
import { Star, Cancel, Person, Rating } from "../../icons";
import Moment from "react-moment";
import "moment/locale/tr";
function Statics({ user }) {
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
          <div className="staticsCard-list-item-text">
            <Moment format="DD MMMM YYYY" locale="tr">
              {user.createdAt}
            </Moment>
          </div>
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
