import "./post.css";
// import postimg from "../../assets/images/post.jpg";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="" />}
      <div className="postInfo">
        <div className="postC">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </Link>
        </div>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
