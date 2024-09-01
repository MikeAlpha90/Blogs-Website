import "./singlePost.css";
import img from "../../assets/images/singlePost.jpeg";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={img} alt="singlePostImg" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Alpha</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
          quibusdam corporis ad voluptas iste molestias ratione eius quae vero
          consequuntur. Iusto doloremque architecto, inventore nulla esse quos.
          Odio corporis distinctio laudantium sed alias vitae cumque pariatur,
          itaque doloremque quo autem vel hic earum adipisci numquam illo veniam
          delectus dolores illum nobis ut? Repellendus minus assumenda, in
          officiis dolore quidem explicabo placeat ex cum unde facere enim quod
          dolorem cupiditate quo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Natus iusto quidem aliquam suscipit porro voluptates
          odit distinctio ipsum vero mollitia assumenda eveniet rerum doloremque
          repudiandae cumque officia, doloribus facere quam. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quo autem dolores, consequatur,
          expedita soluta odio exercitationem pariatur assumenda nam repellendus
          modi, officiis fugiat tenetur rem recusandae consequuntur delectus
          corrupti. Veniam aspernatur, velit eligendi dicta aperiam odit nulla,
          perferendis minima ab vitae neque id maxime? Eaque, vero doloremque?
          Nobis, necessitatibus officia. Quidem eum praesentium ratione eligendi
          mollitia rerum nam culpa blanditiis, non quae soluta unde, recusandae
          commodi veniam laboriosam cumque ea.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
