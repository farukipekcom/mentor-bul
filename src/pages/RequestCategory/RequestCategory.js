import "./RequestCategory.scss";
import { Header, Category, Footer } from "../components";
import { RequestCategoryItemCard, FormInputTextCard } from "../../components";
import { Search } from "../../icons";
import { useState } from "react";
function RequestCategory() {
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
            <div className="requestCategory-title">Yeni Kategori Ekle</div>
            <span className="requestCategory-desc">
              Mentörbul’da listelenmesi için eklenen kategorileri puanlayabilir
              veya yeni kategori talep edebilirsiniz.
            </span>
          </div>
          <div className="requestCategory-list">
            {active ? (
              <div className="requestCategory-list-add">
                <span className="requestCategory-list-add-heading">
                  Kategori Ekle
                </span>
                <div className="requestCategory-list-add-form">
                  <FormInputTextCard placeholder="Eklemek istediğiniz kategoriyi yazınız." />
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
                <button onClick={ekle}>Kategori Ekle</button>
              </div>
            </div>
            <RequestCategoryItemCard />
            <RequestCategoryItemCard />
            <RequestCategoryItemCard />
            <RequestCategoryItemCard />
            <RequestCategoryItemCard />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default RequestCategory;
