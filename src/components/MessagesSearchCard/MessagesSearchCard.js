import { Search } from "../../icons";
import "./MessagesSearchCard.scss";

function MessagesSearchCard() {
  return (
    <div className="messagesSearchCard">
      <input type="text" placeholder="Arama Yap..." />
      <Search />
    </div>
  );
}

export default MessagesSearchCard;
