import "./ProjectCard.scss";
import { TimeFilled } from "../../icons";
import { media1, media2, media3, media4 } from "../../images";
function ProjectCard() {
  return (
    <div className="projectCard">
      <div className="projectCard-heading">
        <div className="projectCard-heading-left">İNTERNET REKLAMCILIĞI</div>
        <div className="projectCard-heading-right">
          <div className="projectCard-heading-right-icon">
            <TimeFilled />
          </div>
          <div className="projectCard-heading-right-details">
            Teklif <span className="date">6 Gün 10 saat</span> sonra sona eriyor
          </div>
        </div>
      </div>
      <div className="projectCard-title">Website Seo analizi yaptırılacak</div>
      <div className="projectCard-seperator"></div>
      <div className="projectCard-details">
        I am creating an online notarization/virtual notarization website. I
        have an idea of the landing page but need full development for the site,
        all functionality, etc. Please let me know if you are interested and I
        can provide more details. - Create SRS Documentation - Create Design
        (Including Graphics and Media) - Front-end Implementation -Back-end
        Implementation - QA & Testing - I will provide SEO copy for the site
      </div>
      <div className="projectCard-gallery">
        <span className="projectCard-gallery-heading">Medya</span>
        <div className="projectCard-gallery-list">
          <img src={media1} alt="" />
          <img src={media2} alt="" />
          <img src={media3} alt="" />
          <img src={media4} alt="" />
        </div>
      </div>
      <div className="projectCard-skill">
        <span className="projectCard-skill-heading">Gerekli Yetenekler</span>
        <div className="projectCard-skill-list">
          <div className="projectCard-skill-list-item">
            Arama Motoru Optimizasyonu
          </div>
          <div className="projectCard-skill-list-item">
            Google Search Console
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
