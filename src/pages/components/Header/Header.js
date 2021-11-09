import "./Header.scss";
import { profilePhoto } from "../../../images";
import { ArrowBottom, Message, Plus, Search } from "../../../icons";

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <a href="/">MENTÖRBUL</a>
      </div>
      <div className="header-search">
        <Search />
        <a href="/search">
          <input type="text" placeholder="Arama Yap..." />
        </a>
      </div>
      <div className="header-right">
        <div className="header-right-message">
          <Message />
        </div>
        <a href="/addproject">
          <div className="header-right-addproject">
            <div className="header-right-addproject-icon">
              <Plus />
            </div>

            <span className="header-right-addproject-text">İlan Oluştur</span>
          </div>
        </a>
        <div className="header-right-profile">
          <a href="/profile">
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
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
