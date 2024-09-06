import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [posts, setPosts]= useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = await axios.get("/posts")
      setPosts(res.data)
    }
    fetchPosts()
  })

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
