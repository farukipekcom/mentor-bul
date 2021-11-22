import "./Messages.scss";
import { Header, Category, Footer } from "../components";
import { MessagesList, MessagesCard } from "../../components";
function Messages() {
  return (
    <div className="rightSidebar">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <MessagesList />
        </div>
        <div className="content">
          <MessagesCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Messages;
