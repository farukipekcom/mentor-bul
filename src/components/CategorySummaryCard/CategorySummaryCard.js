import "./CategorySummaryCard.scss";
import { Sale, Users } from "../../icons";
import { categoryImage } from "../../images";
function CategorySummaryCard() {
  return (
    <div className="categorySummaryCard">
      <div className="container">
        <div className="categorySummaryCard-left">
          <h1 className="categorySummaryCard-left-heading">
            İNTERNET REKLAMCILIĞI
          </h1>
          <div className="categorySummaryCard-left-statics">
            <div className="categorySummaryCard-left-statics-item">
              <div className="categorySummaryCard-left-statics-item-icon">
                <Users />
              </div>
              <div className="categorySummaryCard-left-statics-item-details">
                <div className="categorySummaryCard-left-statics-item-details-desc">
                  Kategorideki toplam kullanıcı
                </div>
                <div className="categorySummaryCard-left-statics-item-details-count">
                  659
                </div>
              </div>
            </div>
            <div className="categorySummaryCard-left-statics-item">
              <div className="categorySummaryCard-left-statics-item-icon">
                <Sale />
              </div>
              <div className="categorySummaryCard-left-statics-item-details">
                <div className="categorySummaryCard-left-statics-item-details-desc">
                  Toplam Satış Adeti
                </div>
                <div className="categorySummaryCard-left-statics-item-details-count">
                  57
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="categorySummaryCard-right">
          <img src={categoryImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CategorySummaryCard;
