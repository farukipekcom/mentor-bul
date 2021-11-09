import "./ShowMoreCard.scss";
import { Loading } from "../../icons";
function ShowMoreCard() {
  return (
    <div className="showMore">
      <div className="showMore-summary">5 adet proje listelenmiştir</div>
      <div className="showMore-button">
        <div className="showMore-button-text">Daha Fazla Göster</div>
        <div className="showMore-button-icon">
          <Loading />
        </div>
      </div>
      <div className="empty"></div>
    </div>
  );
}

export default ShowMoreCard;
