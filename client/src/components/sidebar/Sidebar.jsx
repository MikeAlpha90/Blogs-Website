import "./sidebar.css";
import sidebarImg from '../../assets/images/Sidebar.jpg'

const Sidebar = () => {
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
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
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
