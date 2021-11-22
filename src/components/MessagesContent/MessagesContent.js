import { profilePhoto, user2 } from "../../images";
import "./MessagesContent.scss";

function MessagesContent() {
  return (
    <div className="messagesContent">
      <div className="messagesContent-right">
        <div className="messagesContent-right-time">19:14</div>
        <span className="messagesContent-right-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          laborum voluptatum quis exercitationem doloribus, culpa nemo est odit
          obcaecati expedita blanditiis tempore suscipit vero!
        </span>
        <img
          src={profilePhoto}
          alt=""
          className="messagesContent-right-photo"
        />
      </div>
      <div className="messagesContent-left">
        <img src={user2} alt="" className="messagesContent-left-photo" />

        <span className="messagesContent-left-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
          laborum voluptatum quis exercitationem doloribus, culpa nemo est odit
          obcaecati expedita blanditiis tempore suscipit vero!
        </span>
        <div className="messagesContent-left-time">19:22</div>
      </div>
      <div className="messagesContent-left">
        <img src={user2} alt="" className="messagesContent-left-photo" />

        <span className="messagesContent-left-text">
          Dicta laborum voluptatum quis exercitationem doloribus
        </span>
        <div className="messagesContent-left-time">19:53</div>
      </div>
      <div className="messagesContent-right">
        <div className="messagesContent-right-time">19:54</div>
        <span className="messagesContent-right-text">
          Loremi doloribus, culpa nemo est odit obcaecati expedita blanditiis
          tempore suscipit vero!
        </span>
        <img
          src={profilePhoto}
          alt=""
          className="messagesContent-right-photo"
        />
      </div>
      <div className="messagesContent-input">
        <textarea placeholder="Mesajınızı yazınız...   " />
        <button>Gönder</button>
      </div>
    </div>
  );
}

export default MessagesContent;
