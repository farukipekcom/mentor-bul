import "./MessagesCard.scss";
import { user2 } from "../../images";
import Star from "../Stars/Stars";
import { Profile, Trash } from "../../icons";
import { MessagesContent } from "../";
function MessagesCard() {
  return (
    <div className="messagesCard">
      <div className="messagesCard-left">
        <span className="messagesCard-left-name">Ronald Richard</span>
        <MessagesContent />
      </div>
      <div className="messagesCard-right">
        <img src={user2} alt="" className="messagesCard-right-photo" />
        <span className="messagesCard-right-name">Ronald Richard</span>
        <div className="messagesCard-right-star">
          <Star value="5" />
        </div>
        <span className="messagesCard-right-rating">(5 değerlendirme)</span>
        <div className="messagesCard-right-linkitem">
          <Trash />
          <span className="messagesCard-right-linkitem-text">Sohbeti Sil</span>
        </div>
        <a href="/profile" className="messagesCard-right-linkitem">
          <Profile />
          <span className="messagesCard-right-linkitem-text">Profile Git</span>
        </a>
      </div>
    </div>
  );
}

export default MessagesCard;
