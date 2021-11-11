import "./AddProjectAllPart.scss";
import AddProjectCategoryItem from "../AddProjectCategoryItem/AddProjectCategoryItem";
import { useState } from "react";
import { ArrowBottom, Plus } from "../../icons";

function AddProjectPart1() {
  const [gizli1, setGizli1] = useState(1);
  const [gizli2, setGizli2] = useState(0);
  const [gizli3, setGizli3] = useState(0);
  const ikinciAsamayaGec = () => {
    setGizli1(0);
    setGizli2(1);
  };
  const ucuncuAsamayaGec = () => {
    setGizli2(0);
    setGizli3(1);
  };
  const birinciAsamayaDon = () => {
    setGizli1(1);
    setGizli2(0);
  };
  const ikinciAsamayaDon = () => {
    setGizli2(1);
    setGizli3(0);
  };
  return (
    <div className="addProjectPart addProjectPart1">
      {gizli1 === 1 ? (
        <>
          <span className="addProjectPart-heading">
            Hangi kategoride ilan vermek istersiniz?
          </span>
          <div className="addProjectPart-items">
            <AddProjectCategoryItem value="Grafik & Tasarım" />
            <AddProjectCategoryItem value="İnternet Reklamcılığı" />
            <AddProjectCategoryItem value="Yazı & Çeviri" />
            <AddProjectCategoryItem value="Video & Animasyon" />
            <AddProjectCategoryItem value="Müzik" />
            <AddProjectCategoryItem value="Eğlence" />
            <AddProjectCategoryItem value="Yazılım & Teknoloji" />
            <AddProjectCategoryItem value="İş & Yönetim" />
          </div>

          <div className="addProjectPart1-button">
            <button onClick={ikinciAsamayaGec}>Devam Et</button>
          </div>
        </>
      ) : (
        ""
      )}
      {gizli2 === 1 ? (
        <div className="addProjectPart addProjectPart2">
          <span className="addProjectPart-heading">
            Lütfen alt kategori seçiniz
          </span>
          <div className="addProjectPart-items">
            <AddProjectCategoryItem value="Logo Tasarımı" />
            <AddProjectCategoryItem value="Yayıncılar İçin Tasarımlar" />
            <AddProjectCategoryItem value="Reklam & Banner Tasarımı" />
            <AddProjectCategoryItem value="Broşür & Katalog Tasarımı" />
            <AddProjectCategoryItem value="3D Tasarımlar" />
            <AddProjectCategoryItem value="Oyun Sanatı" />
            <AddProjectCategoryItem value="UI/UX Tasarımı" />
            <AddProjectCategoryItem value="Sosyal Medya Tasarımları" />
            <AddProjectCategoryItem value="İllüstrasyon" />
            <AddProjectCategoryItem value="Ambalaj Tasarımı" />
            <AddProjectCategoryItem value="Fotoğraf & Düzenleme" />
            <AddProjectCategoryItem value="Storyboard Tasarımı" />
            <AddProjectCategoryItem value="Dövme Tasarımı" />
            <AddProjectCategoryItem value="Sunum & Infografik" />
          </div>
          <div className="addProjectPart1-button">
            <button onClick={birinciAsamayaDon} className="back">
              Geri Git
            </button>
            <button onClick={ucuncuAsamayaGec}>Devam Et</button>
          </div>
        </div>
      ) : (
        ""
      )}
      {gizli3 === 1 ? (
        <div className="addProjectPart addProjectPart3">
          <span className="addProjectPart-heading">
            Başlık, açıklama ve diğer detaylar
          </span>
          <div className="addProjectPart3-items">
            <span className="addProjectPart3-items-title">
              Etkileyici ve kısa bir başlık bul!
            </span>
            <input
              type="text"
              placeholder="Başlık giriniz..."
              className="addProjectPart3-items-input"
            />
          </div>
          <div className="addProjectPart3-items">
            <span className="addProjectPart3-items-title">
              Yapacağın işin detaylarını minimum 150 karakterle açıkla
            </span>
            <textarea
              type="text"
              placeholder="Minimum 150 karakter olacak şekilde nasıl bir hizmet sunduğunu detaylı olarak belirt. İş ilanını ne kadar net yazarsan, alıcıların dikkatini de o kadar çekmiş olursun."
              className="addProjectPart3-items-input textarea"
            />
          </div>
          <div className="addProjectPart3-items ">
            <span className="addProjectPart3-items-title">
              Mentörün bilmesi gereken konular nedir?
            </span>
            <div className="addProjectPart3-items-inputcontainer">
              <input
                type="text"
                placeholder="İlgi alanı giriniz..."
                className="addProjectPart3-items-input halfInput"
              />
              <div className="addProjectPart3-items-button">
                <Plus />
              </div>
            </div>
          </div>
          <div className="addProjectPart3-items">
            <span className="addProjectPart3-items-title">
              Nasıl hizmet almak istersiniz?
            </span>
            <div className="custom_select">
              <select
                name=""
                id=""
                className="addProjectPart3-items-input input "
              >
                <option value="Görüntülü Görüşme">Görüntülü Görüşme</option>
                <option value="Dosya Teslim">Dosya Teslim</option>
                <option value="Chat">Chat</option>
              </select>
              <ArrowBottom />
            </div>
          </div>
          <div className="addProjectPart3-items">
            <span className="addProjectPart3-items-title">
              Teslim tarihi seçiniz
            </span>
            <input
              type="datetime-local"
              placeholder="İlgi alanı giriniz..."
              className="addProjectPart3-items-input halfInput deneme2"
            />
          </div>
          <div className="addProjectPart3-items">
            <span className="addProjectPart3-items-title">
              Tahmini bütçeniz nedir?
            </span>
            <div className="custom_select">
              <select
                name=""
                id=""
                className="addProjectPart3-items-input input"
              >
                <option value="Mikro Proje (50-100 TL)">
                  Mikro Proje (50-100 TL)
                </option>
                <option value="Basit Proje (100-200 TL)">
                  Basit Proje (100-200 TL)
                </option>
                <option value="Çok Küçük Proje (200-300 TL)">
                  Çok Küçük Proje (200-300 TL)
                </option>
                <option value="Küçük Proje (300-500 TL)">
                  Küçük Proje (300-500 TL)
                </option>
                <option value="Orta Proje (500-1000 TL)">
                  Orta Proje (500-1000 TL)
                </option>
                <option value="Büyük Proje (1000-2000 TL)">
                  Büyük Proje (1000-2000 TL)
                </option>
                <option value="Çok Büyük Proje (2000-5000 TL)">
                  Çok Büyük Proje (2000-5000 TL)
                </option>
                <option value="Anahtar Teslim Proje (5000+ TL)">
                  Anahtar Teslim Proje (5000+ TL)
                </option>
              </select>
              <ArrowBottom />
            </div>
          </div>
          <div className="addProjectPart3-items">
            <span className="addProjectPart3-items-title">
              İlanınıza eklemek istediğiniz görselleri yükleyiniz.
            </span>
            <input
              type="file"
              placeholder="İlgi alanı giriniz..."
              className="addProjectPart3-items-file "
            />
          </div>
          <div className="addProjectPart1-button">
            <button onClick={ikinciAsamayaDon} className="back">
              Geri Git
            </button>
            <button>İlanı Yayınla</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddProjectPart1;
