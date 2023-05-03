import { Link } from "react-router-dom";
import "./styles/header.css";
import Logo from "./../../assets/logo.png";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  function handleImageClick() {
    setShowMenu(!showMenu);
  }

  function handleLogout() {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  const { user } = useSelector((state) => state);

  return (
    <header className="header">
      <nav className="header__nav">
        <img src={Logo} alt="" className="header__logo" />
        <ul className="header__list">
          <li className="header__item">
            <Link to="/">Posts</Link>
          </li>
          {user?.id ? (
            <>
              <li className="header__item">
                <Link to="/user/profile/me">my posts</Link>
              </li>
              <li className="header__img-content" onClick={handleImageClick}>
                <img
                  src={user.profileImgUrl}
                  className="picture"
                  alt="Profile"
                />
                {showMenu && (
                  <div className="menu">
                    <button className="logoutButton" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </>
          ) : (
            <>
              <li className="header__item">
                <Link to="/register">Register</Link>
              </li>
              <li className="header__item">
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
