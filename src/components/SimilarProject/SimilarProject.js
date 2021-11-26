import "./SimilarProject.scss";
import ProjectSquareCard from "../ProjectSquareCard/ProjectSquareCard";
import { Background } from "../../icons";

function SimilarProject() {
  return (
    <div className="similarProject">
      <div className="container">
        <span className="similarProject-list-heading">Benzer İlanlar</span>
        <div className="similarProject-list">
          <ProjectSquareCard />
          <ProjectSquareCard />
          <ProjectSquareCard />
        </div>
      </div>
    </div>
  );
}

export default SimilarProject;
