import "./SubCategoryCard.scss";
import { ArrowRight } from "../../icons";
function SubCategoryCard() {
  return (
    <div className="subCategoryCard">
      <a href="/sub-category">
        <span className="subCategoryCard-title">Wordpress Site Tasarım</span>
        <div className="subCategoryCard-footer">
          <div className="subCategoryCard-footer-count">24 ilan</div>
          <div className="subCategoryCard-footer-icon">
            <ArrowRight />
          </div>
        </div>
      </a>
    </div>
  );
}

export default SubCategoryCard;
