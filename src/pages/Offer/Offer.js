import "./Offer.scss";
import {
  OfferCard,
  OfferStatics,
  ProjectSquareCard,
  OfferFormCard,
} from "../../components";
import { Header, Category, Footer } from "../components";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Closev2 } from "../../icons";
import { Toaster } from "react-hot-toast";
function Offer() {
  const [project, setProject] = useState();
  const [selectedOffer, setSelectedOffer] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [active, setActive] = useState(0);
  let { username } = useParams();
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Projects/GetProjectDetails/${username}`
      );
      setProject(result.data);
      setIsLoading(true);
    };
    fetchItems();
    isLoading &&
      project.offers
        .filter((key) => key.selected === true)
        .map((item) => setSelectedOffer(true));
  }, [username, isLoading]);
  const averageBid =
    isLoading &&
    project.offers.reduce((acc, item) => acc + item.price, 0) /
      project.offers.length;
  const ekle = () => {
    setActive(1);
  };
  const gizle = () => {
    setActive(0);
  };
  useEffect(() => {
    return location.hash === "#open" ? setActive(1) : setActive(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const location = useLocation();
  const unSelected = () => {
    return (
      isLoading &&
      project.offers?.map(
        (item, index) =>
          item.selected === false && (
            <div className="offer" key={index}>
              <OfferCard
                user_id={project.userId}
                project={project}
                item={item}
              />
            </div>
          )
      )
    );
  };
  const selected = () => {
    return (
      isLoading &&
      project.offers?.map(
        (item, index) =>
          item.selected === true && (
            <div className="offer" key={index}>
              <OfferCard
                user_id={project.userId}
                project={project}
                item={item}
                selected={false}
              />
            </div>
          )
      )
    );
  };
  return (
    <>
      {isLoading && (
        <div className="main offerPage">
          <Header />
          <Category />
          <div className="container">
            <div className="content">
              <div className="tabs">
                <a href={`../../project/${project.slug}`} className="tabs-item">
                  Proje
                </a>
                <div className="tabs-item active">Teklifler</div>
              </div>
              {isLoading && selectedOffer ? selected() : unSelected()}
              {active && isLoading ? (
                <div className="modal-container">
                  <div className="modal">
                    <OfferFormCard
                      projectId={project.projectId}
                      userId={project.userId}
                      minPrice={project.minPrice}
                      maxPrice={project.maxPrice}
                      slug={project.slug}
                    />
                    <div className="modal-close" onClick={gizle}>
                      <Closev2 />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {project.offers?.length === 0 && <h2>Teklif Yok</h2>}
            </div>
            <div className="sidebar">
              <div className="open-offer-form" onClick={ekle}>
                Teklif Ver
              </div>
              {isLoading && project.offers?.length !== 0 && (
                <OfferStatics
                  length={project.offers.length}
                  averageBid={averageBid}
                />
              )}
              {isLoading && <ProjectSquareCard item={project} />}
            </div>
          </div>
          <Toaster
            position="bottom-center"
            toastOptions={{
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
          <Footer />
        </div>
      )}
    </>
  );
}

export default Offer;
