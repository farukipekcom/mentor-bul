import { user3 } from "../../images";
import "./MessagesListItem.scss";

function MessagesListItem() {
  return (
    <div className="messagesListItem">
      <img src={user3} alt="" className="messagesListItem-photo" />
      <div className="messagesListItem-details">
        <div className="messagesListItem-details-heading">
          <span className="messagesListItem-details-heading-name">
            Ronald Richards
          </span>
          <span className="messagesListItem-details-heading-time">
            1 gün önce
          </span>
        </div>
        <span className="messagesListItem-details-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
      </div>
    </div>
  );
}

export default MessagesListItem;
