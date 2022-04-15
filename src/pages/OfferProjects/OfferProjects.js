import "./OfferProjects.scss";
import { Header, Category, Footer } from "../components";
import { ProfileMenuCard, ProjectOfferCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import axios from "axios";
function OfferProjects() {
  const [offer, setOffer] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Offers/GetUserOffer/1`
      );
      setOffer(result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, [isLoading]);
  return (
    <div className="main">
      <Header />
      <Category />
      <div className="container">
        <div className="sidebar">
          <ProfileMenuCard />
        </div>
        <div className="content">
          <div className="navLeftMenu">
            <Menu burgerButtonClassName={"leftMenu"}>
              <ProfileMenuCard />
            </Menu>
          </div>
          <span className="heading">Teklif Verdiğim Hizmetler</span>
          <div className="list">
            {isLoading &&
              offer.map((item, index) => (
                <ProjectOfferCard key={index} item={item} value="Mentee" />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OfferProjects;
