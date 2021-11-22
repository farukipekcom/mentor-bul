import React from "react";
import "./MessageButtonFixed.scss";
import { Message } from "../../icons";
function MessageButtonFixed() {
  return (
    <a href="/messages" className="messageButtonFixed">
      <div className="messageButtonFixed-icon">
        <Message />
      </div>
      <div className="messageButtonFixed-text">Mesajlar</div>
    </a>
  );
}

export default MessageButtonFixed;
