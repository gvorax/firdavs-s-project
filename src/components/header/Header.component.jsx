import React, { useState } from 'react';
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineClose,
} from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillTelephoneForwardFill } from 'react-icons/bs';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import './header.styles.css';

const menu = [
  'Home',
  'Current affairs',
  'Archive',
  'Featured',
  'Broadcast',
  'Category',
];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>RENESSANS</h1>
        </div>

        <ul className="nav-desktop">
          {menu.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>

        <div className="icons">
          <ul>
            <FaTelegramPlane size={20} />
            <BsFillTelephoneForwardFill size={20} />
            <AiOutlineInstagram size={20} />
            <AiOutlineYoutube size={20} />
          </ul>
        </div>

        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} size={20} color="#fff" />

          {toggle && (
            <div className="app__navbar-close">
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {menu.map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
                <div className="icons-menu">
                  <FaTelegramPlane size={20} />
                  <BsFillTelephoneForwardFill size={20} />
                  <AiOutlineInstagram size={20} />
                  <AiOutlineYoutube size={20} />
              </div>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
