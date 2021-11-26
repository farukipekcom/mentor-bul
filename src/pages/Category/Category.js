import "./Category.scss";
import { Header, Category as CategoryHeader, Footer } from "../components";
import {
  FilterCard,
  ProjectCardHorizontal,
  CategorySummaryCard,
  ShowMoreCard,
} from "../../components";
import { slide as Menu2 } from "react-burger-menu";
function Category() {
  return (
    <div className="main categoryPage">
      <Header />
      <CategoryHeader />
      <CategorySummaryCard />
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
          <ProjectCardHorizontal />
          <ProjectCardHorizontal />
          <ProjectCardHorizontal />
          <ProjectCardHorizontal />
          <ProjectCardHorizontal />
          <ShowMoreCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
