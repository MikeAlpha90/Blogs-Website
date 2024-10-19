import "./sidebar.css";
import sidebarImg from '../../assets/images/Sidebar.jpg'
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [cats, setCats]= useState([])

  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("/categories")
      setCats(res.data)
    }
    getCats()
  },[])

  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img className="img" src={sidebarImg} alt="sidebar profile" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
          ducimus enim sed magni quo esse veniam ex ratione deleniti totam?
        </p>
      </div>
      <div className="sidebaritem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          {cats.map(c=>(
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebaritem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
