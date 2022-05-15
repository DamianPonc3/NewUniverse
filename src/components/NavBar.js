import React from "react";
import CartWidget from "./CartWidget"


export default function NavBar() {
    return (
    <>
    <nav>
        <div className="brand">
            <div className="container">
                <CartWidget />
                New Universe
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
