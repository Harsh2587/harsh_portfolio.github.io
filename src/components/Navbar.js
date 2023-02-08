import logo from "../assets/logo.jpg"
import "./Navbar.css"


const Navbar = () => {
  return (
    <nav id="home">
        {/* logo added here  */}
        <div className="nav-logo" >
            <img src={logo} alt="logo" />
        </div>

        {/* links are added here  */}
        <div className="nav-links">
            <ul>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#technicalskills">Skills</a>
                </li>
                <li>
                    <a href="#works">Projects</a>
                </li>
                <li>
                    <a href="#contacts">contacts</a>
                </li>
                <li>
                    <a href="#footer">Socials</a>
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar
