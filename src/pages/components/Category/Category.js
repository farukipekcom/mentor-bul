import "./Category.scss";
function Category() {
  return (
    <div className="category">
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
  );
}

export default Category;
