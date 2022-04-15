import "./SellProject.scss";
import { Header, Category, Footer } from "../components";
import { Loading, ProfileMenuCard, ProjectSummaryCard } from "../../components";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import axios from "axios";
function SellProject() {
  const [order, setOrder] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Orders/GetOrderList/${loggedIn.userId}`
      );
      setOrder(result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, [loggedIn.userId]);
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
          <span className="heading">Mentee’lere vermiş olduğum hizmetler</span>
          <div className="list">
            {isLoading ? (
              order.map((item) => (
                <ProjectSummaryCard item={item} value="Mentee" />
              ))
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SellProject;
