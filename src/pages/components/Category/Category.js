import "./Category.scss";
import { slide as Menu } from "react-burger-menu";
import { useEffect, useState } from "react";
import axios from "axios";

function Category() {
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        "https://localhost:5001/api/Categories/StatusTrue"
      );
      setCategory(result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, []);
  return (
    <>
      <div className="category category-desktop">
        <div className="category-list">
          {isLoading
            ? category.map((item, index) => (
                <div
                  className="category-list-item border-animation menu-border"
                  key={index}
                >
                  <a href={`../category/${item.slug}`}>{item.name}</a>
                </div>
              ))
            : "Yükleniyor"}
        </div>
      </div>
      <div className="category-mobile">
        <Menu right>
          <span className="kategori">Kategoriler</span>
          <div className="category-list-item menu-border menu-item">
            <a href="/category">Grafik & Tasarım</a>
          </div>
          <div className="category-list-item menu-border menu-item">
            <a href="/category">İnternet Reklamcılığı</a>
          </div>
          <div className="category-list-item menu-border menu-item">
            <a href="/category">Yazı & Çeviri</a>
          </div>
          <div className="category-list-item menu-border menu-item">
            <a href="/category">Video & Animasyon</a>
          </div>
          <div className="category-list-item menu-border menu-item">
            <a href="/sub-category">Müzik</a>
          </div>
          <div className="category-list-item menu-border menu-item">
            <a href="/sub-category">Eğlence</a>
          </div>
          <div className="category-list-item menu-border menu-item">
            <a href="/sub-category">Yazılım & Teknoloji</a>
          </div>
          <div className="category-list-item menu-border menu-item">
            <a href="/sub-category">İş & Yönetim</a>
          </div>
        </Menu>
      </div>
    </>
  );
}

export default Category;
