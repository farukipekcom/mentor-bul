import "./AddProjectAllPart.scss";
import { ArrowBottom } from "../../icons";
import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import slug from "slug";
import moment from "moment";
import { Closev2 } from "../../icons";
import { FormInputTextCard } from "..";
function AddProjectPart1() {
  const basarili = () =>
    toast.success("Başarıyla Eklendi!", {
      position: "bottom-center",
    });
  const hatali = () =>
    toast.error("Hata Oluştu!", {
      position: "bottom-center",
    });
  const [formValue, setformValue] = useState({
    title: "",
    categoryId: "",
    subCategoryId: "",
    userId: 2,
    description: "",
    type: "",
    slug: "",
    minPrice: "",
    maxPrice: "",
    dueDate: "",
    tagsId: "",
    fileName: "",
    status: true,
    createdAt: moment().format("yyyy-MM-DDTHH:mm").toString(),
    updatedAt: moment().format("yyyy-MM-DDTHH:mm").toString(),
  });
  const [gizli1, setGizli1] = useState(1);
  const [gizli2, setGizli2] = useState(0);
  const [gizli3, setGizli3] = useState(0);
  const [categoryIdFind, setCategoryIdFind] = useState();
  const [subCategoryIdFind, setSubCategoryIdFind] = useState();
  const [tag, setTag] = useState([]);
  const [text, setText] = useState("");
  const [suggestList, setSuggestList] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [suggestId, setSuggestId] = useState([]);
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [selectedType, setSelectedType] = useState();
  const [selectedPrice, setSelectedPrice] = useState();
  // ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://localhost:5001/api/Categories/");
      setCategory(result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, []);
  useEffect(() => {
    const loadTag = async () => {
      const response = await axios.get("https://localhost:5001/api/Tags");
      setTag(response.data);
    };
    loadTag();
  }, []);
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
  const saveFile = (e) => {
    const bu = e.target.files;
    console.log(bu[0]);
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    setformValue({
      ...formValue,
      fileName: e.target.files[0].name,
    });
  };
  const handleChangeTitle = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const onChangeType = (event) => {
    setSelectedType(event.target.value);
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };
  const onChangeCategory = (e) => {
    setCategoryIdFind(e.target.value);
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  const onChangeSubCategory = (e) => {
    setSubCategoryIdFind(e.target.id);
    setformValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const OnChangeTag = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = tag.filter((item) => {
        const regex = new RegExp(`${text}`, "gi");
        return item.name.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };
  const onSuggestHandler = (text, tagId) => {
    setSuggestId((prevState) => [...prevState, tagId]);
    setSuggestList((prevState) => [...prevState, [text, tagId]]);
    setText("");
    setSuggestions();
  };
  function handleRemove(id) {
    const newList = suggestList.filter((item) => item[1] !== id);
    setSuggestList(newList);
  }
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Categories/DetailsId/${categoryIdFind}`
      );
      setSubCategory(result.data.subCategories);
      setIsLoading2(true);
    };
    fetchItems();
  }, [categoryIdFind]);
  const priceChange = (event) => {
    setSelectedPrice(event.target.value);
    const priceSelected = event.target.value.split("-");
    setformValue({
      ...formValue,
      minPrice: priceSelected[0],
      maxPrice: priceSelected[1],
    });
  };
  const temizle = () => {
    setCategoryIdFind("");
    setSubCategoryIdFind("");
    setSuggestList([]);
    setSelectedType("");
    setSelectedPrice("");
    setformValue({
      title: "",
      description: "",
      dueDate: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("formFile", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post(
        "https://localhost:5001/api/Upload",
        formData
      );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
    const loginFormData = new FormData();
    loginFormData.append("title", formValue.title);
    loginFormData.append("categoryId", formValue.categoryId);
    loginFormData.append("subCategoryId", formValue.subCategoryId);
    loginFormData.append("description", formValue.description);
    loginFormData.append("type", formValue.type);
    loginFormData.append("minPrice", formValue.minPrice);
    loginFormData.append("maxPrice", formValue.maxPrice);
    formValue.slug = slug(formValue.title);
    loginFormData.append("slug", formValue.slug);
    loginFormData.append("dueDate", formValue.dueDate);
    formValue.tagsId = suggestId.toString();
    loginFormData.append("tagsId", formValue.tagsId);
    loginFormData.append("fileName", formValue.fileName);
    axios
      .post("https://localhost:5001/api/Projects", formValue)
      .then((response) => {
        basarili();
        setCategoryIdFind("");
      })
      .catch(function (error) {
        hatali();
        setCategoryIdFind("");
      });
    temizle();
  };
  return (
    <div className="addProjectPart">
      {gizli1 === 1 ? (
        <>
          <div className="addProjectPart addProjectPart1">
            <span className="addProjectPart-heading">
              Hangi kategoride ilan vermek istersiniz?
            </span>
            <div className="addProjectPart-items">
              {isLoading &&
                category.map((item, index) => (
                  <div className="addProjectCategoryItem" key={index}>
                    <label>
                      <input
                        name="categoryId"
                        value={item.categoryId}
                        id={item.categoryId}
                        type="radio"
                        onChange={onChangeCategory}
                        // eslint-disable-next-line eqeqeq
                        checked={categoryIdFind == item.categoryId}
                      />
                      <span className="active">{item.name}</span>
                    </label>
                  </div>
                ))}
            </div>
            <div className="addProjectPart1-button">
              {/* <button onClick={categoryIdFind ? ikinciAsamayaGec : ""}> */}
              <button onClick={ikinciAsamayaGec}>Devam Et</button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {gizli2 === 1 ? (
        <>
          <div className="addProjectPart addProjectPart2">
            <span className="addProjectPart-heading">
              Lütfen alt kategori seçiniz
            </span>
            <div className="addProjectPart-items">
              {isLoading2 &&
                subCategory.map((item, index) => (
                  <div className="addProjectCategoryItem" key={index}>
                    <label>
                      <input
                        name="subCategoryId"
                        value={item.subCategoryId}
                        id={item.subCategoryId}
                        type="radio"
                        onChange={onChangeSubCategory}
                        // eslint-disable-next-line eqeqeq
                        checked={subCategoryIdFind == item.subCategoryId}
                      />
                      <span className="active">{item.name}</span>
                    </label>
                  </div>
                ))}
            </div>
            <div className="addProjectPart1-button">
              <button onClick={birinciAsamayaDon} className="back">
                Geri Git
              </button>
              <button onClick={ucuncuAsamayaGec}>Devam Et</button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {gizli3 === 1 ? (
        <>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div className="addProjectPart addProjectPart3">
              <span className="addProjectPart-heading">
                Başlık, açıklama ve diğer detaylar
              </span>
              <div className="addProjectPart3-items">
                <span className="addProjectPart3-items-title">
                  Etkileyici ve kısa bir başlık bul!
                </span>
                <FormInputTextCard
                  placeholder="Başlık giriniz..."
                  name="title"
                  value={formValue.title}
                  onChange={handleChangeTitle}
                  className="addProjectPart3-items-input"
                />
              </div>
              <div className="addProjectPart3-items">
                <span className="addProjectPart3-items-title">
                  Yapacağın işin detaylarını minimum 150 karakterle açıkla
                </span>
                <textarea
                  placeholder="Minimum 150 karakter olacak şekilde nasıl bir hizmet sunduğunu detaylı olarak belirt. İş ilanını ne kadar net yazarsan, alıcıların dikkatini de o kadar çekmiş olursun."
                  className="addProjectPart3-items-input textarea"
                  name="description"
                  value={formValue.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="addProjectPart3-items ">
                <span className="addProjectPart3-items-title">
                  Mentörün bilmesi gereken konular nedir?
                </span>
                <div className="addProjectPart3-items-inputcontainer bakbu">
                  <div className="leftbu">
                    <input
                      type="text"
                      value={text}
                      placeholder="İlgi alanı giriniz..."
                      onChange={(e) => OnChangeTag(e.target.value)}
                      className="addProjectPart3-items-input halfInput"
                    />
                    <div className="onerilenler-container">
                      {suggestions && (
                        <div className="onerilenler">
                          {suggestions.map((item, index) => (
                            <div
                              key={index}
                              onClick={() =>
                                onSuggestHandler(item.name, item.tagId)
                              }
                            >
                              {item.name}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="rightbu">
                    <div className="secilen-ana">
                      {suggestList.map((item, index) => (
                        <div className="secildi" key={index}>
                          <span>{item[0]}</span>
                          <button
                            type="button"
                            onClick={() => handleRemove(item[1])}
                            className="closed-item"
                          >
                            <Closev2 />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="addProjectPart3-items">
                <span className="addProjectPart3-items-title">
                  Nasıl hizmet almak istersiniz?
                </span>
                <div className="custom_select">
                  <select
                    name="type"
                    className="addProjectPart3-items-input input"
                    value={selectedType}
                    onChange={onChangeType}
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
                  name="dueDate"
                  type="datetime-local"
                  value={formValue.dueDate}
                  onChange={handleChange}
                  min={moment().format("yyyy-MM-DDTHH:mm")}
                  className="addProjectPart3-items-input halfInput deneme2"
                  required
                />
              </div>
              <div className="addProjectPart3-items">
                <span className="addProjectPart3-items-title">
                  Tahmini bütçeniz nedir?
                </span>
                <div className="custom_select">
                  <select
                    name="minPrice"
                    className="addProjectPart3-items-input input"
                    value={selectedPrice}
                    onChange={priceChange}
                  >
                    <option value="50-100">Mikro Proje (50-100 TL)</option>
                    <option value="100-200">Basit Proje (100-200 TL)</option>
                    <option value="200-300">
                      Çok Küçük Proje (200-300 TL)
                    </option>
                    <option value="300-500">Küçük Proje (300-500 TL)</option>
                    <option value="500-1000">Orta Proje (500-1000 TL)</option>
                    <option value="1000-2000">
                      Büyük Proje (1000-2000 TL)
                    </option>
                    <option value="2000-5000">
                      Çok Büyük Proje (2000-5000 TL)
                    </option>
                    <option value="5000-999999">
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
                  className="addProjectPart3-items-file"
                  onChange={saveFile}
                  multiple
                />
              </div>
              {/* sss
              <img
                src="https://localhost:5001/Resources/Images/faruk-ipek-vize.jpg"
                alt="faruk"
              />
              <a
                href="https://localhost:5001/Resources/Images/sorular%20(1).docx"
                download="filename"
              >
                Download link
              </a> */}
              {/* <input type="button" value="upload" onClick={uploadFile} /> */}
              <div className="addProjectPart1-button">
                <button onClick={ikinciAsamayaDon} className="back">
                  Geri Git
                </button>
                <button type="submit">İlanı Yayınla</button>
              </div>
            </div>
          </form>
        </>
      ) : (
        ""
      )}
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

export default AddProjectPart1;
