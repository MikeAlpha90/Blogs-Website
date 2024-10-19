import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts]= useState([]);
  const location = useLocation()
  const search = location.search

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])

  return (
    <div>
      <Header />
    <div className="home">
      <div className="posts"><Posts posts = {posts}/></div>
      <div className="sidebar"><Sidebar/></div>
    </div>
    </div>
  );
};

export default Home;
