import "../styles/Navbar.css"

function Navbar(){
return(
    <nav className="nav">
        <h1>Pranav S.</h1>
        <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/lifting">Lifting</a></li>
            <li><a href="/Contact">Contact</a></li>   
        </ul>

    </nav>
);
}

export default Navbar;