import "./Offer.scss";
import {
  OfferCard,
  OfferStatics,
  ProjectSquareCard,
  Loading,
  OfferFormCard,
} from "../../components";
import { Header, Category, Footer } from "../components";
import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Closev2 } from "../../icons";
// import slug from "slug";
import { Toaster } from "react-hot-toast";
function Offer() {
  const [offers, setOffers] = useState();
  const [project, setProject] = useState();
  const [secildibu, setSecildiBu] = useState();
  const [slug, setSlug] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [secildi, setSecildi] = useState(false);
  let { username } = useParams();
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Projects/GetProjectDetails/${username}`
      );
      setSlug(result.data.slug);
      setOffers(result.data.offers);
      setProject(result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, [username]);

  const averageBid =
    isLoading &&
    offers.reduce((acc, item) => acc + item.price, 0) / offers.length;

  const [aktif, setAktif] = useState(0);
  const ekle = () => {
    setAktif(1);
  };
  const gizle = () => {
    setAktif(0);
  };
  useEffect(() => {
    return location.hash === "#open" ? setAktif(1) : setAktif(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const location = useLocation();
  useEffect(() => {
    isLoading &&
      offers
        .filter((key) => key.selected === true)
        .map((item) => setSecildiBu(true));
  }, [isLoading]);

  console.log(secildibu);
  const secilmedi = () => {
    return (
      isLoading &&
      offers?.map((item, index) =>
        item.selected === false ? (
          <div className="offer" key={index}>
            <OfferCard user_id={project.userId} item={item} />
          </div>
        ) : (
          ""
        )
      )
    );
  };
  const secildilo = () => {
    return (
      isLoading &&
      offers?.map((item, index) =>
        item.selected === true ? (
          <div className="offer" key={index}>
            <OfferCard user_id={project.userId} item={item} sec={false} />
          </div>
        ) : (
          ""
        )
      )
    );
  };

  return (
    <div className="main offerPage">
      <Header />
      <Category />
      <div className="container">
        <div className="content">
          <div className="tabs">
            <a href={`../../project/${slug}`} className="tabs-item">
              Proje
            </a>
            <div className="tabs-item active">Teklifler</div>
          </div>
          {/* {isLoading && secilmedi()} */}
          {isLoading && secildibu ? secildilo() : secilmedi()}
          {aktif && isLoading ? (
            <>
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
            </>
          ) : (
            ""
          )}
          {offers?.length === 0 && <h2>Teklif Yok</h2>}
        </div>
        <div className="sidebar">
          <div className="open-offer-form" onClick={ekle}>
            Teklif Ver
          </div>
          {isLoading && offers?.length !== 0 ? (
            <OfferStatics length={offers.length} averageBid={averageBid} />
          ) : (
            ""
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
  );
}

export default Offer;
