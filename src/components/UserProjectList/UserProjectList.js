import { ProjectSquareCard } from "..";
import "./UserProjectList.scss";
function UserProjectList() {
  return (
    <div className="userProjectList">
      <div className="userProjectList-heading">Aktif İlanlar</div>
      <div className="userProjectList-list">
        <ProjectSquareCard />
        <ProjectSquareCard />
      </div>
    </div>
  );
}

export default UserProjectList;
