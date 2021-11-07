import React from "react";
import "./ProfessionCard.scss";
function Profession() {
  return (
    <div className="professionCard">
      <h3 className="professionCard-heading">Yetenekler</h3>
      <div className="professionCard-list">
        <div className="professionCard-list-item">Wordpress</div>
        <div className="professionCard-list-item">Responsive</div>
        <div className="professionCard-list-item">Figma</div>
        <div className="professionCard-list-item">Web geliştirici</div>
        <div className="professionCard-list-item">Wordpress Güvenlik</div>
      </div>
    </div>
  );
}

export default Profession;
