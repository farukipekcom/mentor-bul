import "./RequestProfession.scss";
import { Header, Category, Footer } from "../components";
import { RequestCategoryItemCard, FormInputTextCard } from "../../components";
import { Search, Dot } from "../../icons";
import { useState } from "react";
function RequestProfession() {
  const [active, setActive] = useState(0);
  const ekle = () => {
    setActive(!active);
  };
  return (
    <div className="requestCategory">
      <div className="rightSidebar">
        <Header />
        <Category />
        <div className="container">
          <div className="requestCategory-heading">
            <div className="requestCategory-title">
              Yeni Uzmanlık Alanı Ekle
            </div>
            <span className="requestCategory-desc">
              Mentörbul’da bulunmayan uzmanlık alanları için istekte
              bulunabilirsiniz.
            </span>
          </div>
          <div className="requestCategory-list">
            {active ? (
              <div className="requestCategory-list-add">
                <span className="requestCategory-list-add-heading">
                  Yeni Uzmanlık Alanı Ekle
                </span>
                <div className="requestCategory-list-add-form">
                  <FormInputTextCard placeholder="Eklemek istediğiniz uzmanlık alanını yazınız." />
                  <button onClick={ekle}>Ekle</button>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="requestCategory-list-search">
              <div className="requestCategory-list-search-left">
                <Search />
                <FormInputTextCard placeholder="Arama Yap" />
              </div>
              <div className="requestCategory-list-search-right">
                <button onClick={ekle}>Uzmanlık Alanı Ekle</button>
              </div>
            </div>
            <div className="requestCategory-list-profession">
              <span className="requestCategory-list-profession-item">
                <Dot />
                Frontend Developer
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Backend Developer
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Grafiker
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Ses Sanatçısı
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Frontend Developer
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Backend Developer
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Grafiker
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Ses Sanatçısı
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Frontend Developer
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Backend Developer
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Grafiker
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Ses Sanatçısı
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Frontend Developer
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Backend Developer
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Grafiker
              </span>
              <span className="requestCategory-list-profession-item">
                <Dot />
                Ses Sanatçısı
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RequestProfession;
