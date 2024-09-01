import "./about.css";
import a from "../../assets/images/post.jpg";
import b from "../../assets/images/singlePost.jpeg";
import c from "../../assets/images/write.jpg";
import d from "../../assets/images/registerback.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="left">
        <div className="images">
            <img className="large large1" src={a} alt="" />
            <img className="small small1" src={b} alt="" />
          <div className="imageRight">
            <img className="small small2" src={c} alt="" />
            <img className="large large2" src={d} alt="" />
          </div>
        </div>
      </div>
      <div className="right">
        <div className="aboutWrapper">
          <div className="aboutHead">
            <h1 className="aboutTitle">ABOUT</h1>
            <p className="aboutDetail">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              perspiciatis. Animi cupiditate fugit modi aperiam alias quis saepe
              ab, tempore sit ipsum quisquam illum quod exercitationem sapiente
              temporibus quae. Saepe.
            </p>
          </div>
          <div className="aboutSocial">
            <i className="aboutIcon fa-brands fa-square-facebook"></i>
            <i className="aboutIcon fa-brands fa-square-x-twitter"></i>
            <i className="aboutIcon fa-brands fa-square-pinterest"></i>
            <i className="aboutIcon fa-brands fa-square-instagram"></i>
          </div>
          <hr className="aboutLine" />
          <div className="aboutQ">
            <span>Have any question</span>
            <span>Contact Us</span>
          </div>
          <span className="aboutNumber">+99(232)4334544</span>
        </div>
      </div>
    </div>
  );
};

export default About;
