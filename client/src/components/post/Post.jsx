import "./post.css";
import postimg from "../../assets/images/post.jpg";

const Post = () => {
  return (
    <div className="post">
      <img className="postImg" src={postimg} alt="" />
      <div className="postInfo">
        <div className="postC">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">2 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores id ad
        minus consequatur sapiente nam reprehenderit accusamus perferendis
        debitis excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Ad, quia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolores id ad minus consequatur sapiente nam reprehenderit accusamus
        perferendis debitis excepturi. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Ad, quia. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolores id ad minus consequatur sapiente nam
        reprehenderit accusamus perferendis debitis excepturi. Lorem ipsum dolor
        sit, amet consectetur adipisicing elit. Ad, quia.
      </p>
    </div>
  );
};

export default Post;
