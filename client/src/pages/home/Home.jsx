import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
    <div className="home">
      <div className="posts"><Posts/></div>
      <div className="sidebar"><Sidebar/></div>
    </div>
    </div>
  );
};

export default Home;
