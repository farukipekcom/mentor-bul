import "./Search.scss";
import { Header, Category as CategoryHeader, Footer } from "../components";
import {
  ShowMoreCard,
  FilterCard,
  SearchCard,
  ProjectCardHorizontal,
} from "../../components";
function Search() {
  return (
    <div className="rightSidebar">
      <Header />
      <CategoryHeader />
      <SearchCard />
      <div className="container">
        <div className="sidebar">
          <FilterCard />
        </div>
        <div className="content">
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

export default Search;
