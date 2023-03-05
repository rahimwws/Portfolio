import {NavLink}  from "react-router-dom";
import { DarkThemeBtn } from "../DarkThemeBtn/DarkThemeBtn";
import "./Nav.css";
const Nav = (props) => {
  const aciveLink = 'nav-list__link nav-list__link--active'
  const Link = 'nav-list__link'
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink  to="/" className="logo"><strong>Portfolio</strong></NavLink>
          <DarkThemeBtn></DarkThemeBtn>
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={({isActive})=> isActive ? aciveLink : Link}>
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/projects" className={({isActive})=> isActive ? aciveLink : Link}>
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="/contact" className={({isActive})=> isActive ? aciveLink : Link}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Nav