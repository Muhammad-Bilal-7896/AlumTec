import React, { useEffect } from 'react';

//import Logo from '../UI/logo.JPEG XR';


import Link from "next/link"

const Header = () => {
    useEffect(() => {
        // The debounce function receives our function as a parameter
        const debounce = (fn) => {

            // This holds the requestAnimationFrame reference, so we can cancel it if we wish
            let frame;

            // The debounce function returns a new function that can receive a variable number of arguments
            return (...params) => {

                // If the frame variable has been defined, clear it now, and queue for next frame
                if (frame) {
                    cancelAnimationFrame(frame);
                }

                // Queue our function call for the next frame
                frame = requestAnimationFrame(() => {

                    // Call our function and pass any params we received
                    fn(...params);
                });

            }
        };


        // Reads out the scroll position and stores it in the data attribute
        // so we can use it in our stylesheets
        const storeScroll = () => {
            document.documentElement.dataset.scroll = window.scrollY;
        }

        // Listen for new scroll events, here we debounce our `storeScroll` function
        document.addEventListener('scroll', debounce(storeScroll), { passive: true });

        // Update scroll position for first time
        storeScroll();
    })
    return (
        <div>

            {/* Navbar */}
            <nav style={{ borderBottom: "0.5px solid #0275d8" }} className="navbar navbar-expand-lg navbar-light">
                {/* Container wrapper */}
                <div className="container-fluid">
                    {/* Navbar brand */}
                    <Link href="/">
                        <a className="navbar-brand">
                            <img className="logo" src="UI/logo.JPEG XR" alt="Alum tech" />
                        </a>
                    </Link>
                    {/* Toggle button */}
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars" />
                    </button>
                    {/* Collapsible wrapper */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* Left links */}
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/"><a className="nav-link active">HOME</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about"><a className="nav-link">ABOUT US</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/services"><a className="nav-link">SERVICES</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/products"><a className="nav-link">OUR PRODUCTS</a></Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/health"><a className="nav-link">HEALTH & SAFETY</a></Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                                    CAREER
                                </a>
                                {/* Dropdown menu */}
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link href="/career"><a className="dropdown-item">CAREER</a></Link></li>
                                    <li>
                                        <Link href="/admin"><a className="dropdown-item">ADMIN</a></Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" ><a href="/" className="nav-link">CONTACT US</a></Link>
                            </li>
                            {/* Navbar dropdown */}
                            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                  PROJECTS
                </a>
               
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Completed</a></li>
                  <li><a className="dropdown-item" href="#">Ongoing</a></li>
                </ul>
              </li> */}
                            {/* <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">FACTORY GALLERY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">CAREER</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">QUALITY POLICY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" aria-disabled="true">CONTACT US</a>
              </li>*/}
                        </ul>
                        {/* Left links */}
                    </div>
                    {/* Collapsible wrapper */}
                </div>
                {/* Container wrapper */}
            </nav>
            {/* Navbar */}
        </div>
    )
}
export default Header;