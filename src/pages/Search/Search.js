import "./Search.scss";
import { Header, Category as CategoryHeader, Footer } from "../components";
import {
  ShowMoreCard,
  FilterCard,
  SearchCard,
  ProjectCardHorizontal,
} from "../../components";
import { slide as Menu2 } from "react-burger-menu";
function Search() {
  return (
    <div className="main searchPage">
      <Header />
      <CategoryHeader />
      <SearchCard />
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
          <div className="list">
            <ProjectCardHorizontal />
            <ProjectCardHorizontal />
            <ProjectCardHorizontal />
            <ProjectCardHorizontal />
            <ProjectCardHorizontal />
            <ShowMoreCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
