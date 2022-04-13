import { ProjectSquareCardProfile } from "..";
import "./UserProjectList.scss";
function UserProjectList({ project }) {
  return (
    <div className="userProjectList">
      {project.projects.length !== 0 ? (
        <>
          <div className="userProjectList-heading">Aktif İlanlar</div>
          <div className="userProjectList-list">
            {project.projects.map((item, index) => (
              <div className="projectSquareCard" key={index}>
                <ProjectSquareCardProfile item={item} user={project} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div
          className="userProjectList-heading"
          style={{ marginBottom: "0px" }}
        >
          Aktif İlan Yok
        </div>
      )}
    </div>
  );
}

export default UserProjectList;
