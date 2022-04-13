import "./SearchCard.scss";
function SearchCard({ slug }) {
  return (
    <div className="searchCard">
      <div className="container">
        <div className="searchCard-title">
          “{slug}” için sonuçlar listelendi
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
