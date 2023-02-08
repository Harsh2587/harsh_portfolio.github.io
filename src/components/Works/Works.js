import "./Works.css"
import w1 from "../../assets/w1.jpg"
import w2 from "../../assets/w2.jpg"
import w3 from "../../assets/w3.jpg"
import w4 from "../../assets/w4.jpg"
import w5 from "../../assets/w5.jpg"
import w6 from "../../assets/w6.jpg"


const Works = () => {
  return (
    <div id="works">
        
    <h5 className="whataremyprojects">What Are My Works</h5>
    <h2 className="myrecentworks">My Recent Works</h2>
    <div className="works-container">
        <div className="works-list-container">
            <div className="works-item">
                <img src={w1} alt="work1" />
            </div>
            <div className="works-item">
                <img src={w2} alt="work2" />
            </div>
            <div className="works-item">
                <img src={w3} alt="work3" />
            </div>
            <div className="works-item">
                <img src={w4} alt="work4" />
            </div>
            <div className="works-item">
                <img src={w5} alt="work5" />
            </div>
            <div className="works-item">
                <img src={w6} alt="w6" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Works