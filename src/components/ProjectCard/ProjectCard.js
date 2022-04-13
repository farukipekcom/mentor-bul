import "./ProjectCard.scss";
import { TimeFilled } from "../../icons";
import moment from "moment";
import { useState, useEffect } from "react";
import axios from "axios";
function ProjectCard({ project }) {
  var birinci = new Date(Date.now());
  var result1 = birinci.getTime();
  var ikinci = new Date(project.dueDate);
  var result2 = ikinci.getTime();
  const startDate = moment(result1);
  const timeEnd = moment(result2);
  const diff = timeEnd.diff(startDate);
  const diffDuration = moment.duration(diff);
  const [tags, setTags] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://localhost:5001/api/tags");
      setTags(result.data);
      setIsLoading(true);
    };
    fetchItems();
  }, []);

  const deneme = project.tagsId.split(",");
  return (
    <>
      <div className="projectCard">
        <div className="projectCard-heading">
          <div className="projectCard-heading-left">İNTERNET REKLAMCILIĞI</div>
          <div className="projectCard-heading-right">
            <div className="projectCard-heading-right-icon">
              <TimeFilled />
            </div>
            <div className="projectCard-heading-right-details">
              Teklif{" "}
              <span className="date">
                {diffDuration.months() > 0
                  ? diffDuration.months() + " ay "
                  : ""}
                {diffDuration.days() > 0 ? diffDuration.days() + " gün " : ""}
                {diffDuration.hours() > 0
                  ? diffDuration.hours() + " saat "
                  : ""}
                {diffDuration.months() === 0 && diffDuration.days() === 0
                  ? diffDuration.minutes() + " dakika"
                  : ""}
              </span>{" "}
              sonra sona eriyor
            </div>
          </div>
        </div>
        <div className="projectCard-title">{project.title}</div>
        <div className="projectCard-seperator"></div>
        <div className="projectCard-details">{project.description}</div>

        {project.fileName ? (
          <>
            <div className="projectCard-gallery">
              <span className="projectCard-gallery-heading">Medya</span>
              <div className="projectCard-gallery-list">
                <img
                  src={`https://localhost:5001/Resources/Images/${project.fileName}`}
                  alt=""
                />
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="projectCard-skill">
          <span className="projectCard-skill-heading">Gerekli Yetenekler</span>
          <div className="projectCard-skill-list">
            {isLoading &&
              deneme.map((item, index) =>
                tags
                  .filter((items) => items.tagId === parseInt(item))
                  .map((tag) => {
                    return (
                      <div className="projectCard-skill-list-item" key={index}>
                        {tag.name}
                      </div>
                    );
                  })
              )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
