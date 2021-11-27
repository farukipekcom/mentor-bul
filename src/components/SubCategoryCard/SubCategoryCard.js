import "./SubCategoryCard.scss";
import { ArrowRight } from "../../icons";
function SubCategoryCard() {
  return (
    <a href="/sub-category" className="subCategoryCard">
      <span className="subCategoryCard-title">Wordpress Site Tasarım</span>
      <div className="subCategoryCard-footer">
        <div className="subCategoryCard-footer-count">24 ilan</div>
        <div className="subCategoryCard-footer-icon">
          <ArrowRight />
        </div>
      </div>
    </a>
  );
}

export default SubCategoryCard;
