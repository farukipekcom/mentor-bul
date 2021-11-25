import "./Category.scss";
import { slide as Menu } from "react-burger-menu";

function Category() {
  return (
    <>
      <div className="category category-desktop">
        <div className="category-list">
          <div className="category-list-item border-animation menu-border">
            <a href="/category">Grafik & Tasarım</a>
          </div>
          <div className="category-list-item border-animation menu-border">
            <a href="/category">İnternet Reklamcılığı</a>
          </div>
          <div className="category-list-item border-animation menu-border">
            <a href="/category">Yazı & Çeviri</a>
          </div>
          <div className="category-list-item border-animation menu-border">
            <a href="/category">Video & Animasyon</a>
          </div>
          <div className="category-list-item border-animation menu-border">
            <a href="/sub-category">Müzik</a>
          </div>
          <div className="category-list-item border-animation menu-border">
            <a href="/sub-category">Eğlence</a>
          </div>
          <div className="category-list-item border-animation menu-border">
            <a href="/sub-category">Yazılım & Teknoloji</a>
          </div>
          <div className="category-list-item border-animation menu-border">
            <a href="/sub-category">İş & Yönetim</a>
          </div>
        </div>
      </div>
      <div className="category-mobile">
        <Menu right>
          <div className="category-list-item border-animation menu-border menu-item">
            <a href="/category">Grafik & Tasarım</a>
          </div>
          <div className="category-list-item border-animation menu-border menu-item">
            <a href="/category">İnternet Reklamcılığı</a>
          </div>
          <div className="category-list-item border-animation menu-border menu-item">
            <a href="/category">Yazı & Çeviri</a>
          </div>
          <div className="category-list-item border-animation menu-border menu-item">
            <a href="/category">Video & Animasyon</a>
          </div>
          <div className="category-list-item border-animation menu-border menu-item">
            <a href="/sub-category">Müzik</a>
          </div>
          <div className="category-list-item border-animation menu-border menu-item">
            <a href="/sub-category">Eğlence</a>
          </div>
          <div className="category-list-item border-animation menu-border menu-item">
            <a href="/sub-category">Yazılım & Teknoloji</a>
          </div>
          <div className="category-list-item border-animation menu-border menu-item">
            <a href="/sub-category">İş & Yönetim</a>
          </div>
        </Menu>
      </div>
    </>
  );
}

export default Category;
