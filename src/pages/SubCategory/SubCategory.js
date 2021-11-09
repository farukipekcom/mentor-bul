import "./SubCategory.scss";
import { SubCategoryCard, CategorySummaryCard } from "../../components";
import { Header, Footer } from "../components";
import { Category as CategoryHeader } from "../../pages/components/";
function SubCategory() {
  return (
    <div className="rightSidebar">
      <Header />
      <CategoryHeader />
      <CategorySummaryCard />
      <div className="container">
        <div className="fullWidth">
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
          <SubCategoryCard />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SubCategory;
