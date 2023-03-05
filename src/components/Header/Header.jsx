import { Link } from 'react-router-dom';

import './Header.css'

export const Header = (props) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Rahim</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <Link to = '/contact' className='btn'>Contact with me</Link>
      </div>
    </header>
  );
};
