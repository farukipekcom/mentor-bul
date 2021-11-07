import "./Header.scss";
import { profilePhoto } from "../../../images";
import { ArrowBottom, Message, Plus, Search } from "../../../icons";
function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <a href="index.html">MENTÖRBUL</a>
      </div>
      <div className="header-search">
        <Search />
        <input type="text" placeholder="Arama Yap..." />
      </div>
      <div className="header-right">
        <div className="header-right-message">
          <Message />
        </div>
        <div className="header-right-addproject">
          <div className="header-right-addproject-icon">
            <Plus />
          </div>

          <span className="header-right-addproject-text">İlan Oluştur</span>
        </div>
        <div className="header-right-profile">
          <img
            src={profilePhoto}
            alt=""
            className="header-right-profile-photo"
          />
          <div className="header-right-profile-details">
            <div className="header-right-profile-details-fullname">
              Faruk İpek
            </div>
            <div className="header-right-profile-details-profession">
              Front-end Developer
            </div>
          </div>
          <ArrowBottom />
        </div>
      </div>
    </div>
  );
}

export default Header;
