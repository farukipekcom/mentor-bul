import "./RequestCategory.scss";
import { Header, Category, Footer } from "../components";
import { RequestCategoryItemCard, FormInputTextCard } from "../../components";
import { Search } from "../../icons";
import { useState, useEffect } from "react";
import slug from "slug";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import tr from "date-fns/locale/tr";
import moment from "moment";

function RequestCategory() {
  registerLocale("tr", tr);
  const [active, setActive] = useState(1);
  const ekle = () => {
    setActive(active);
  };

  const [formValue, setformValue] = useState({
    name: "",
    slug: "",
    createdAt: "",
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
    // formValue.createdAt = formValue.createdAt.toString().slice(0, -21);
    loginFormData.append("createdAt", formValue.createdAt);
    axios
      .post("https://localhost:5001/api/Categories", formValue)
      .then((response) => {
        basarili();
      })
      .catch(function (error) {
        hatali();
      });
    ekle();
  };
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://localhost:5001/api/Categories/");
      setCategory(result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, []);

  return (
    <div className="main requestCategory fullWidthPage">
      <Header />
      <Category />

      <div className="requestContainer">
        <div className="fullWidthPage-heading">
          <div className="fullWidthPage-heading-title">Yeni Kategori Ekle</div>
          <span className="fullWidthPage-heading-desc">
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
              <form
                onSubmit={handleSubmit}
                className="requestCategory-list-add-form"
              >
                <FormInputTextCard
                  placeholder="Eklemek istediğiniz kategoriyi yazınız."
                  name="name"
                  value={formValue.name}
                  onChange={handleChange}
                />
                {/* <FormInputTextCard
                  placeholder="Eklemek istediğiniz kategoriyi yazınız."
                  name="createdAt"
                  value={formValue.createdAt}
                  onChange={handleChange}
                /> */}
                <input
                  name="createdAt"
                  type="datetime-local"
                  value={formValue.startDate}
                  onChange={handleChange}
                  min={moment().format("yyyy-MM-DDTHH:mm")}
                />

                <button type="submit">Ekle</button>
              </form>
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
          {isLoading
            ? category
                .map((item, index) => (
                  <div
                    key={index}
                    className="requestCategoryItem"
                    style={
                      item.status === true
                        ? { opacity: " .3" }
                        : { opacity: " 1" }
                    }
                  >
                    <RequestCategoryItemCard item={item} />
                  </div>
                ))
                .sort((a, b) => (a.created_at > b.created_at ? 1 : -1))
            : "yukleniyor"}
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

export default RequestCategory;
