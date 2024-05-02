import React, { useState, useEffect } from "react";
import axios from "axios";

const Git = () => {
  const [profileData, setProfileData] = useState(null);
  const username = "Creativetools90"; // Replace 'your_username' with your GitHub username
//    Creativetools90
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchProfile();
  }, [username]);

  return (
    <div className="gitProfile">
      {profileData ? (
        <div className="gitWraper">
          <div className="gitAvtor">
            <img src={profileData.avatar_url} alt="GitHub Avatar" />
          </div>
          <div className="gitInfo">
            <p className="data">
              Username: <span className="data_Span">{profileData.login}</span> 
            </p>
            <p className="data">Followers:  <span className="data_Span">{profileData.followers}</span> </p>
            <p className="data">Following:  <span className="data_Span">{profileData.following}</span> </p>
            <p className="data">Public Repos:  <span className="data_Span">{profileData.public_repos}</span> </p>
            <p className="data">Bio:  <span className="data_Span">{profileData.bio}</span> </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Git;
