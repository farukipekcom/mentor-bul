import React from "react";
import "./MessageButtonFixed.scss";
import { Message } from "../../icons";
function MessageButtonFixed() {
  return (
    <div className="messageButtonFixed">
      <div className="messageButtonFixed-icon">
        <Message />
      </div>
      <div className="messageButtonFixed-text">Mesajlar</div>
    </div>
  );
}

export default MessageButtonFixed;
