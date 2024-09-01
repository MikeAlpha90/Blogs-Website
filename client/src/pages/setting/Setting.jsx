import Sidebar from "../../components/sidebar/Sidebar";
import profilePic from "../../assets/images/profile.avif";
import "./setting.css";

const Setting = () => {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdateTitle">Update Your Account</span>
          <span className="settingDeleteTitle">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Pictur</label>
          <div className="settingPP">
            <img className="settingPic" src={profilePic} alt="" />
            <label htmlFor="fileInput">
              <i className="settingIcon fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Alpha" />
          <label>Email</label>
          <input type="email" placeholder="Alpha@gmail.com" />
          <label>password</label>
          <input type="password"/>
          <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Setting;
