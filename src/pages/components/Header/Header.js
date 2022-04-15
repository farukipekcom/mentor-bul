import "./Header.scss";
import { ArrowBottom, Message, Plus, Search, Profile } from "../../../icons";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Header() {
  const loggedIn = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();
  const [active, setActive] = useState();
  const [project, setProject] = useState([]);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [yaz, setYaz] = useState();
  const changeActive = () => {
    setActive(!active);
  };
  const handlesubmit = async (e) => {
    navigate(`../search/${yaz}`);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
    }
  };
  useEffect(() => {
    const loadProject = async () => {
      const response = await axios.get("https://localhost:5001/api/Projects");
      setProject(response.data);
    };
    loadProject();
  }, []);
  const OnChangeProject = async (text) => {
    setYaz(text);
    let matches = [];
    if (text.length > 0) {
      matches = project.filter((item) => {
        const regex = new RegExp(`${text}`, "gi");
        return item.title.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };
  const onSuggestHandler = (text, slug) => {
    setText("");
    setSuggestions();
    navigate(`../../project/${slug}`);
  };
  return (
    <div className="header">
      <div className="header-logo">
        <a href="/">MENTÖRBUL</a>
      </div>
      <div className="header-search">
        <form onSubmit={handlesubmit}>
          <input
            type="text"
            value={text}
            placeholder="Arama Yap..."
            onChange={(e) => OnChangeProject(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <div className="header-search-suggestions">
            {suggestions.map((item, index) => (
              <div
                key={index}
                onClick={() => onSuggestHandler(item.title, item.slug)}
                className="header-search-suggestions-item"
              >
                {item.title}
              </div>
            ))}
          </div>
          <button type="submit" className="header-search-button">
            <Search />
          </button>
        </form>
      </div>
      <div className="header-right">
        <a href="/messages">
          <div className="header-right-message">
            <Message />
          </div>
        </a>
        <a href="/addproject">
          <div className="header-right-addproject">
            <div className="header-right-addproject-icon">
              <Plus />
            </div>

            <span className="header-right-addproject-text">İlan Oluştur</span>
          </div>
        </a>
        <div className="header-right-profile">
          <a href={`/profile/${loggedIn.username}`}>
            <img
              src={loggedIn.profilePhoto}
              alt=""
              className="header-right-profile-photo"
            />
            <div className="header-right-profile-details">
              <div className="header-right-profile-details-fullname">
                {loggedIn.firstName} {loggedIn.lastName}
              </div>
              <div className="header-right-profile-details-profession">
                Front-end Developer
              </div>
            </div>
            <ArrowBottom />
          </a>
        </div>
      </div>
      <div className="mobile-search">
        <button onClick={changeActive}>
          <Search />
        </button>
        {active && (
          <div className="mobile-search-box">
            <Search />
            <input
              type="text"
              className="mobile-search-input"
              placeholder="Arama Yapınız.."
            />
          </div>
        )}
      </div>
      <div className="mobile-profile">
        <a href="/profile">
          <Profile />
        </a>
        <div className="mobile-profile-dropdown">
          <a href="/profile">Profil</a>
          <a href="/messages">Mesajlar</a>
          <a href="/SettingsGeneral">Ayarlar</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
