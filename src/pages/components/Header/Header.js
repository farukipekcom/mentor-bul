import "./Header.scss";
import { profilePhoto } from "../../../images";
import { ArrowBottom, Message, Plus, Search, Profile } from "../../../icons";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState();
  const degistir = () => {
    setActive(!active);
  };
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
        <a href="/messages">
          <div className="header-right-message">
            <Message />
          </div>
        </a>
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
      <div class="mobile-search">
        <button onClick={degistir}>
          <Search />
        </button>
        {active ? (
          <div className="mobile-search-box">
            <Search />
            <input
              type="text"
              className="mobile-search-input"
              placeholder="Arama Yapınız.."
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div class="mobile-profile">
        <a href="/profile">
          <Profile />
        </a>
        <div class="mobile-profile-dropdown">
          <a href="/profile">Profil</a>
          <a href="/messages">Mesajlar</a>
          <a href="/SettingsGeneral">Ayarlar</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
