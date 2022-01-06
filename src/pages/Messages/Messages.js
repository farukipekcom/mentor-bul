import "./Messages.scss";
import { Header, Category, Footer } from "../components";
import { MessagesList, MessagesCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
function Messages() {
  return (
    <div className="main messagePage">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <MessagesList />
        </div>
        <div className="content">
          <div className="navLeftMenu">
            <Menu burgerButtonClassName={"leftMenu"}>
              <MessagesList />
            </Menu>
          </div>
          <MessagesCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Messages;
