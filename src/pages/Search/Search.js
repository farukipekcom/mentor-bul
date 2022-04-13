import "./Search.scss";
import { Header, Category as CategoryHeader, Footer } from "../components";
import {
  ShowMoreCard,
  FilterCard,
  SearchCard,
  ProjectCardHorizontal,
  Loading,
} from "../../components";
// import { Star } from "../../icons";
import { slide as Menu2 } from "react-burger-menu";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Search() {
  let { slug } = useParams();
  const [taskType1, setTaskType1] = useState(1);
  const [taskType2, setTaskType2] = useState(2);
  const [taskType3, setTaskType3] = useState(3);
  const [taskMinFiyat, setTaskMinFiyat] = useState("");
  const [taskMaxFiyat, setTaskMaxFiyat] = useState("");
  const [type1, setType1] = useState(1);
  const [type2, setType2] = useState(2);
  const [type3, setType3] = useState(3);
  const [minFiyat, setMinFiyat] = useState("");
  const [maxFiyat, setMaxFiyat] = useState("");
  const [project, setProject] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Projects/GetProjectSearch?word=${slug}&type1=${
          taskType1 ? 1 : ""
        }&type2=${taskType2}&type3=${taskType3}&minPrice=${minFiyat}&maxPrice=${maxFiyat}`
      );
      setProject(result.data);
      console.log(result.config.url);
      setTimeout(() => {
        setIsLoading(true);
      }, 500);
    };
    fetchItems();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type1, type2, type3, minFiyat, maxFiyat]);
  // const yeni = String(type).split(" ").join("%20");
  const degistir1 = (e) => {
    e.target.checked === true ? setTaskType1(e.target.value) : setTaskType1("");
  };
  const degistir2 = (e) => {
    e.target.checked === true ? setTaskType2(e.target.value) : setTaskType2("");
  };
  const degistir3 = (e) => {
    e.target.checked === true ? setTaskType3(e.target.value) : setTaskType3("");
  };
  const minFiyatDegistir = (e) => {
    e.preventDefault();
    setTaskMinFiyat(e.target.value);
  };
  const maxFiyatDegistir = (e) => {
    e.preventDefault();
    setTaskMaxFiyat(e.target.value);
  };
  const yolla = async (e) => {
    e.preventDefault();
    setMinFiyat(taskMinFiyat);
    setMaxFiyat(taskMaxFiyat);
    setType1(taskType1);
    setType2(taskType2);
    setType3(taskType3);
  };
  return (
    <div className="main searchPage">
      <Header />
      <CategoryHeader />
      <SearchCard slug={slug} />
      <div className="container">
        <div className="sidebar">
          <div className="filterCard">
            <h3 className="filterCard-heading">Filtrele</h3>
            <form onSubmit={yolla} className="hizmetturu">
              <div className="filterCard-filteritem">
                <div className="filterCard-filteritem-heading">Hizmet Türü</div>
                <div className="hizmetturu">
                  <label className="custom_checkbox">
                    Görüntülü Görüşme
                    <input
                      type="checkbox"
                      onChange={degistir1}
                      value="1"
                      // eslint-disable-next-line eqeqeq
                      checked={taskType1 == "1" && "checked"}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="custom_checkbox">
                    Proje Teslim
                    <input
                      type="checkbox"
                      onChange={degistir2}
                      value="2"
                      // eslint-disable-next-line eqeqeq
                      checked={taskType2 == "2" && "checked"}
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="custom_checkbox">
                    Dosya Teslim
                    <input
                      type="checkbox"
                      onChange={degistir3}
                      value="3"
                      // eslint-disable-next-line eqeqeq
                      checked={taskType3 == "3" && "checked"}
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="filterCard-filteritem">
                <div className="filterCard-filteritem-heading">
                  Fiyat Aralığı
                </div>
                <div className="filterCard-filteritem-price">
                  <div className="filterCard-filteritem-price-item">
                    <span>Min. Fiyat</span>
                    <input
                      type="number"
                      placeholder="150 ₺"
                      name="minFiyat"
                      value={taskMinFiyat}
                      onChange={minFiyatDegistir}
                    />
                  </div>
                  <div className="filterCard-filteritem-price-item">
                    <span>Max. Fiyat</span>
                    <input
                      type="number"
                      placeholder="350 ₺"
                      name="minFiyat"
                      value={taskMaxFiyat}
                      onChange={maxFiyatDegistir}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="filterCard-button">
                Filtrele
              </button>
            </form>
            {/* <div className="filterCard-filteritem">
              <div className="filterCard-filteritem-heading">
                Kullanıcı Puanı
              </div>
              <form className="hizmetturu">
                <label className="custom_checkbox">
                  <Star />
                  <span className="checkbox-text">4 puan ve üzeri</span>
                  <input type="checkbox" checked />
                  <span className="checkmark"></span>
                </label>
                <label className="custom_checkbox">
                  <Star />
                  <span className="checkbox-text">3 puan ve üzeri</span>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="custom_checkbox">
                  <Star />
                  <span className="checkbox-text">2 puan ve üzeri</span>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="custom_checkbox">
                  <Star />
                  <span className="checkbox-text">1 puan ve üzeri</span>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
                <label className="custom_checkbox nopoint">
                  <Star />
                  <span className="checkbox-text">Puansız</span>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </form>
            </div> */}
          </div>
        </div>
        <div className="content">
          <div className="navFilterMenu">
            <Menu2 burgerButtonClassName={"filterMenu"}>
              <FilterCard />
            </Menu2>
          </div>
          {/* {isLoading ? (
            project
              .filter(
                (item) => item.minPrice > 0
                // item.minPrice > 0
                // item.minPrice > 0 && item.type === type && item.minPrice > 0
              )
              .map((item) => (
                <>
                  <ProjectCardHorizontal item={item} />
                </>
              ))
          ) : (
            <Loading />
          )}
          <hr /> */}
          <div className="list">
            {isLoading ? (
              project.map((item, index) => (
                <ProjectCardHorizontal key={index} item={item} />
              ))
            ) : (
              <Loading />
            )}
            <ShowMoreCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
