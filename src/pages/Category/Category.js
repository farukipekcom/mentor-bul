import "./Category.scss";
import { Header, Category as CategoryHeader, Footer } from "../components";
import { FilterCard, ProjectCardHorizontal } from "../../components";
function Category() {
  return (
    <div className="rightSidebar">
      <Header />
      <CategoryHeader />
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
