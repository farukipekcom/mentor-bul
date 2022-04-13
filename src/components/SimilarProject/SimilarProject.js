import "./SimilarProject.scss";
// import ProjectSquareCard from "../ProjectSquareCard/ProjectSquareCard";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
function SimilarProject() {
  // const [project, setProject] = useState();
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const fetchItems = async () => {
  //     const result = await axios.get("https://localhost:5001/api/Projects");
  //      setProject(result.data);
  //      setIsLoading(true);
  //   };
  //   fetchItems();
  // }, []);

  return (
    <div className="similarProject">
      <div className="container">
        <span className="similarProject-list-heading">Benzer İlanlar</span>
        <div className="similarProject-list">
          {/* <ProjectSquareCard project={project} /> */}
        </div>
      </div>
    </div>
  );
}

export default SimilarProject;
