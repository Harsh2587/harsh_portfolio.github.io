import "./Footer.css"
import logo from "../../assets/logo.jpg"

const Footer = () => {
  return (
        <footer id="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
            {/* copyright */}
            <div className="footer-copyright">
                <p>© 2022 Harsh Sarda Portfolio. All Right reserved</p>
            </div>
            {/* social media links */}
            <ul className="footer-social-media">
                   <li>
                      <a href="https://www.facebook.com/harsh.sarda.180?mibextid=ZbWKwL" target="true">
                          <i className="fa-brands fa-facebook"></i>
                       </a>
                    </li>

                    <li>
                       <a href="https://www.instagram.com/killer2587/" target="true">
                         <i className="fa-brands fa-instagram"></i>
                       </a>
                    </li>

                    <li>
                       <a href="https://www.linkedin.com/in/harsh-sarda" target="true">
                          <i className="fa-brands fa-linkedin"></i>
                       </a>
                    </li>
                    <li>
                       <a href="https://github.com/Harsh2587" target="true">
                          <i className="fa-brands fa-github"></i>
                       </a>
                    </li>

            </ul>
            



        </footer>
  )
}

export default Footer