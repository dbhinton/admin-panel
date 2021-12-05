import { PermIdentity, Publish } from "@material-ui/icons";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import React from "react";
import {Link } from 'react-router-dom';
import "./UserDetailStyles.css";

export default function UserDetail() {
  return (
    <div className="userDetail">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to='/newUser'><button className="userAddButton">Create</button></Link>
        
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              className="userShowImage"
              src="https://i.imgur.com/nulR6IG.png"
              alt="userImage"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">David</span>
              <span className="userShowJobTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowBottomTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Username: dbhinton</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Join Date: 08/20/2021</span>
            </div>
            <span className="userShowBottomTitle">Contact Details</span>
            <div className="userShowInfo">
              <EmailIcon className="userShowIcon" />
              <span className="userShowInfoTitle">
                Email: dhinton.us@gmail.com
              </span>
            </div>
            <div className="userShowInfo">
              <PhoneIphoneIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Number: 617-650-7943</span>
            </div>
            <div className="userShowInfo">
              <LocationCityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">Hometown: Boston, MA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit User</span>
          <form className="userUpdateForm">
            <div className="userLeft">
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="username for user"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="username for user"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="Email"
                  className="userUpdateInput"
                />
              </div>
   
              <div className="userUpdateItem">
                <label>Phone Number</label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Address"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
                <div className="userUpdateUpload">
                    <img className="userUpdateImage" src="https://i.imgur.com/nulR6IG.png" alt="" />
                    <label htmlFor="file"> <Publish className="userUpdateIcon"/> </label>
                    <input type="file" id="file" style={{display: "none"}}/>
                    
                </div>
                <button className="updateUserButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
