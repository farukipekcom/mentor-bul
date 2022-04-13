import "./AboutCard.scss";
function AboutCard({ user }) {
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="aboutCard">
      <h3 className="aboutCard-heading">Hakkımda</h3>
      <p className="aboutCard-text">{loggedIn.about}</p>
    </div>
  );
}

export default AboutCard;
