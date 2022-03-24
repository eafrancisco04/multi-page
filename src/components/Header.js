function Header() {

    return(
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a href="#" class="nav-link">Home</a>
                <a href="#" class="nav-link">Gallery</a>
                <a href="#" class="nav-link">Contact</a>
                <form class="d-flex justify-content-between w-25">
                    <input class="form-control w-75" type="search" placeholder="Search" aria-label="Search"></input>
                    <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
            </nav>
        </header>

    )

}

    export default Header;