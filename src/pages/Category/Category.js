import "./Category.scss";
import { Header, Category as CategoryHeader, Footer } from "../components";
import {
  FilterCard,
  ProjectCardHorizontal,
  CategorySummaryCard,
  ShowMoreCard,
  Loading,
} from "../../components";
import { slide as Menu2 } from "react-burger-menu";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function Category() {
  let { slug } = useParams();
  const [categoryMain, setCategoryMain] = useState();
  const [category, setCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Categories/Details/${slug}`
      );
      setCategoryMain(result.data);
      setCategory(result.data.projects);
      setIsLoading(true);
    };
    fetchItems();
  }, [slug]);
  return (
    <div className="main categoryPage">
      <Header />
      <CategoryHeader />
      {isLoading ? <CategorySummaryCard categoryMain={categoryMain} /> : ""}
      <div className="container">
        <div className="sidebar">
          <FilterCard />
        </div>
        <div className="content">
          <div className="navFilterMenu">
            <Menu2 burgerButtonClassName={"filterMenu"}>
              <FilterCard />
            </Menu2>
          </div>
          {isLoading && category.length === 0 ? (
            "İlan Yok"
          ) : isLoading && category.length > 0 ? (
            category.map((item, index) => (
              <ProjectCardHorizontal key={index} item={item} />
            ))
          ) : (
            <Loading />
          )}
          {isLoading ? <ShowMoreCard length={category.length} /> : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
