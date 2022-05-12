import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";


export default function NavBar() {
  const [navbarState, setNavbarState] = useState(false);
  return (
    <>
    <nav>
        <div className="brand">
            <div className="container">
                <img src={logo} alt="" />
                New Universe
            </div>
            <div className="toggle">
                {navbarState ? (
                <VscChromeClose onClick={() => setNavbarState(false)} />
                ) : (
                <GiHamburgerMenu onClick={() => setNavbarState(true)} />
            )}
            </div>
        </div>

        <ul>
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#services">About</a>
            </li>
            <li>
                <a href="#recommend">Places</a>
            </li>
            <li>
                <a href="#testimonials">Testimonials</a>
            </li>
        </ul>
        <button>Connect</button>
    </nav>
    </>
    );
}
