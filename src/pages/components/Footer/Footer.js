import "./Footer.scss";
import { Appstore, GooglePlay, FacebookFilled, Twitter } from "../../../icons";
import MessageButtonFixed from "../../../components/MessageButtonFixed/MessageButtonFixed";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-boxes">
          <div className="footer-top-boxes-box">
            <div className="footer-top-boxes-box-logo">
              <a href="index.html">MENTÖRBUL</a>
            </div>
            <div className="footer-top-boxes-box-socialmedia">
              <div className="footer-top-boxes-box-socialmedia-item">
                <FacebookFilled />
              </div>
              <div className="footer-top-boxes-box-socialmedia-item">
                <Twitter />
              </div>
            </div>
          </div>
          <div className="footer-top-boxes-box">
            <div className="footer-top-boxes-box-heading">Kategoriler</div>
            <div className="footer-top-boxes-box-list">
              <div className="footer-top-boxes-box-list-item">
                Grafik & Tasarım
              </div>
              <div className="footer-top-boxes-box-list-item">
                Yazılım & Teknoloji
              </div>
              <div className="footer-top-boxes-box-list-item">
                İnternet Reklamcılığı
              </div>
              <div className="footer-top-boxes-box-list-item">
                Video & Animasyon
              </div>
              <div className="footer-top-boxes-box-list-item">
                Yazı & Çeviri
              </div>
              <div className="footer-top-boxes-box-list-item">Ses & Müzik</div>
            </div>
          </div>
          <div className="footer-top-boxes-box">
            <div className="footer-top-boxes-box-heading">Hakkımızda</div>
            <div className="footer-top-boxes-box-list">
              <div className="footer-top-boxes-box-list-item">Hakkımızda</div>
              <div className="footer-top-boxes-box-list-item">
                Hizmetlerimiz
              </div>
              <div className="footer-top-boxes-box-list-item">Ekibimiz</div>
              <div className="footer-top-boxes-box-list-item">Blog</div>
            </div>
          </div>
          <div className="footer-top-boxes-box">
            <div className="footer-top-boxes-box-heading">Destek</div>
            <div className="footer-top-boxes-box-list">
              <div className="footer-top-boxes-box-list-item">
                <a href="/requestCategory">Kategori Ekle</a>
              </div>
              <div className="footer-top-boxes-box-list-item">
                <a href="/requestProfession">Uzmanlık Alanı Ekle</a>
              </div>
              <div className="footer-top-boxes-box-list-item">
                Yardım Merkezi
              </div>
              <div className="footer-top-boxes-box-list-item">
                Nasıl Çalışır
              </div>
              <div className="footer-top-boxes-box-list-item">Bize Yazın</div>
              <div className="footer-top-boxes-box-list-item">İletişim</div>
            </div>
          </div>
          <div className="footer-top-boxes-box">
            <div className="footer-top-boxes-box-download">
              <div className="footer-top-boxes-box-download-item">
                <GooglePlay />
              </div>
              <div className="footer-top-boxes-box-download-item">
                <Appstore />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <div className="footer-bottom-left-list">
            <div className="footer-bottom-left-list-item">
              Üyelik Sözleşmesi
            </div>
            <div className="footer-bottom-left-list-item">Gizlilik</div>
            <div className="footer-bottom-left-list-item">
              Kişisel Verilerin Korunması Politikası
            </div>
          </div>
        </div>
        <div className="footer-bottom-right">Mentörbul © 2021</div>
      </div>
      <MessageButtonFixed />
    </div>
  );
}

export default Footer;
