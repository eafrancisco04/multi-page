import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";

function Header() {

    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <Link to="/" class="nav-link">Home</Link>
                <Link to="/gallery" class="nav-link">Gallery</Link>
                <Link to="/contacts" class="nav-link">Contact</Link>
                <form class="d-flex justify-content-around w-25">
                    <input class="form-control w-75" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contacts" element={<Contact />} />
            </Routes>
        </header>

    )

}

    export default Header;