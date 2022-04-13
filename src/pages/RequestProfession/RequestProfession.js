import "./RequestProfession.scss";
import { Header, Category, Footer } from "../components";
import { FormInputTextCard } from "../../components";
import { Search, Dot } from "../../icons";
import { useState, useEffect } from "react";
import slug from "slug";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
function RequestProfession() {
  const [active, setActive] = useState(0);
  const ekle = () => {
    setActive(!active);
  };
  const [formValue, setformValue] = useState({
    name: "",
    slug: "",
  });
  const basarili = () =>
    toast.success("Başarıyla Eklendi!", {
      position: "bottom-center",
    });
  const hatali = () =>
    toast.error("Hata Oluştu!", {
      position: "bottom-center",
    });

  const handleSubmit = async () => {
    const loginFormData = new FormData();
    loginFormData.append("name", formValue.name);
    formValue.slug = slug(formValue.name);
    loginFormData.append("slug", formValue.slug);
    for (let i = 0; i < 3; i++) {
      axios
        .post("https://localhost:5001/api/Tags", formValue)
        .then((response) => {
          basarili();
        })
        .catch(function (error) {
          hatali();
        });
    }

    ekle();
  };
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const [tags, setTags] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://localhost:5001/api/tags");
      setTags(result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, []);
  // -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  const [etiket, setEtiket] = useState();
  const [yukleniyor, setYukleniyor] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        "https://localhost:5001/api/tags/GetTagDetails/1"
      );
      setEtiket(result.data);
      console.log("GELEN DATA!!!!!", result.data);
      setYukleniyor(true);
    };
    fetchItems();
  }, []);
  console.log("ETIKET", yukleniyor && etiket);
  var yeni = yukleniyor && etiket;
  function updatePost() {
    yeni.name = "FARUK2";
    console.log("YENI", yeni);
    console.log("BASILDI");
    axios.put("https://localhost:5001/api/tags/1", yeni).then((response) => {
      console.log(response.status);
    });
  }
  return (
    <div className="main requestProfession fullWidthPage">
      <Header />
      <Category />
      <div className="requestContainer">
        <div className="fullWidthPage-heading">
          <div className="fullWidthPage-heading-title">
            <button onClick={updatePost}>GUNCELLE</button>
            Yeni Uzmanlık Alanı Ekle
          </div>
          <span className="fullWidthPage-heading-desc">
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
                <FormInputTextCard
                  placeholder="Eklemek istediğiniz uzmanlık alanını yazınız."
                  name="name"
                  value={formValue.name}
                  onChange={handleChange}
                />
                <button onClick={handleSubmit}>Ekle</button>
              </div>
            </div>
          ) : (
            "yukleniyor"
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
            {isLoading
              ? tags.map((item, key) => (
                  <span className="requestCategory-list-profession-item">
                    <Dot />
                    {item.name}
                  </span>
                ))
              : "yukleniyor"}
          </div>
        </div>
      </div>
      <Footer />
      <Toaster
        position="bottom-center"
        toastOptions={{
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </div>
  );
}

export default RequestProfession;
