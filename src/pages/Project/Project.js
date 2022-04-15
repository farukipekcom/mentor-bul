import "./Project.scss";
import {
  ProjectCard,
  CommentCard,
  PriceCard,
  ProjectProfileCard,
  Loading,
} from "../../components";
import { Header, Category, Footer } from "../../pages/components";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import SimilarProject from "../../components/SimilarProject/SimilarProject";
function Project() {
  let { slug } = useParams();
  const [project, setProject] = useState();
  const [comment, setComment] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://localhost:5001/api/Projects/GetProjectDetails/${slug}`
      );
      setProject(result.data);
      setIsLoading(true);
    };
    const fetchItemss = async () => {
      const result = await axios(
        `https://localhost:5001/api/Comments/GetCommentList/${project.userId}`
      );
      setComment(result.data);
    };
    fetchItems();
    isLoading && fetchItemss();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {isLoading ? (
        <div className="main projectPage">
          <Header />
          <Category />
          <div className="container">
            <div className="content">
              <div className="tabs">
                <div className="tabs-item active">Proje</div>
                <a href={`../../offer/${project.slug}`} className="tabs-item">
                  Teklifler
                </a>
              </div>
              <ProjectCard project={project} />
              <CommentCard
                user_id={project.userId}
                username={project.user.username}
              />
            </div>
            <div className="sidebar">
              <PriceCard
                min_price={project.minPrice}
                max_price={project.maxPrice}
                slug={project.slug}
              />
              <ProjectProfileCard comment={comment} profile={project.user} />
            </div>
          </div>
          {/* <SimilarProject /> */}
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Project;
