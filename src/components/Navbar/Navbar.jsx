import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const Menu = () => {
    return (
      <>
        <p>
          <a href="#home">Home</a>
        </p>

        <p>
          <a href="#wgpt3">What is GPT3?</a>
        </p>

        <p>
          <a href="#possibility">Open AI</a>
        </p>

        <p>
          <a href="#features">Case Studies</a>
        </p>

        <p>
          <a href="#blog">Library</a>
        </p>
      </>
    );
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {toggle ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={(e) => setToggle(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={(e) => setToggle(true)}
          />
        )}

        {toggle && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
            </div>

            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign In</p>
              <button type="button">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
