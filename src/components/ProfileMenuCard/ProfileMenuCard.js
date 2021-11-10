import "./ProfileMenuCard.scss";
import { Home, Cart, Cartv2, List, Profile, Settings, Tl } from "../../icons";
function ProfileMenuCard() {
  return (
    <div className="profileMenuCard">
      <span className="profileMenuCard-title">Mentee</span>
      <div className="profileMenuCard-menu">
        <a href="/">
          <div className="profileMenuCard-menu-item active">
            <div className="profileMenuCard-menu-item-icon">
              <Home />
            </div>
            <div className="profileMenuCard-menu-item-name">Anasayfa</div>
          </div>
        </a>
        <a href="">
          <div className="profileMenuCard-menu-item">
            <div className="profileMenuCard-menu-item-icon">
              <Cart />
            </div>
            <div className="profileMenuCard-menu-item-name">
              Aldığım Hizmetler
            </div>
          </div>
        </a>
        <a href="">
          <div className="profileMenuCard-menu-item">
            <div className="profileMenuCard-menu-item-icon">
              <Tl />
            </div>
            <div className="profileMenuCard-menu-item-name">Finans</div>
          </div>
        </a>
      </div>

      <span className="profileMenuCard-title">Mentör</span>
      <div className="profileMenuCard-menu">
        <a href="">
          <div className="profileMenuCard-menu-item">
            <div className="profileMenuCard-menu-item-icon">
              <Cartv2 />
            </div>
            <div className="profileMenuCard-menu-item-name">
              Verdiğim Hizmetler
            </div>
          </div>
        </a>
        <a href="">
          <div className="profileMenuCard-menu-item">
            <div className="profileMenuCard-menu-item-icon">
              <List />
            </div>
            <div className="profileMenuCard-menu-item-name">İlanlarım</div>
          </div>
        </a>
        <a href="">
          <div className="profileMenuCard-menu-item">
            <div className="profileMenuCard-menu-item-icon">
              <Tl />
            </div>
            <div className="profileMenuCard-menu-item-name">Finans</div>
          </div>
        </a>
      </div>

      <div className="profileMenuCard-seperator"></div>
      <div className="profileMenuCard-menu">
        <a href="">
          <div className="profileMenuCard-menu-item">
            <div className="profileMenuCard-menu-item-icon">
              <Profile />
            </div>
            <div className="profileMenuCard-menu-item-name">Hesabım</div>
          </div>
        </a>
        <a href="">
          <div className="profileMenuCard-menu-item">
            <div className="profileMenuCard-menu-item-icon">
              <Settings />
            </div>
            <div className="profileMenuCard-menu-item-name">Ayarlar</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ProfileMenuCard;
