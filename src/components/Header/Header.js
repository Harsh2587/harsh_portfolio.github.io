import "./Header.css";
import Typical from "react-typical";
import profileImg from "../../assets/profile.jpg";

const Header = () => {
  return (
    <>
      <h5 className="whoami">Who Am I</h5>
      <div className="header-container">
        {/* Header content */}
        <div className="header-content">
          <h1>Hi! I Am</h1>
          <h2 className="fullname">Harsh Sarda</h2>
          {/* Adding the typing affect using the react-typical npm package */}
          <h2>
            I'm a{" "}
            {/* bringing the component of Typical and passing some props in it */}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Computer Science Engineer 💻",
                1000,
                "Frontend Developer 🏆",
                1000,
                "Software Development Enthusiast 👨‍💻",
                1000,
              ]}
            />
          </h2>
          <p>
            Seeking a challenging position in a reputed organization where I can
            learn new skills, expand my knowledge, and leverage my learning’s.
            To get an opportunity where I can make the best of my potential and
            contribute to the organization's growth.
          </p>
          <div className="hire-button-container">
            <button>Hire Me</button>
          </div>
        </div>

        {/* Image container */}
        <div className="profile-img-contianer">
          <img src={profileImg} alt="profileImg" />
          <div className="circle-1"></div>
          <div className="circle-2"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
