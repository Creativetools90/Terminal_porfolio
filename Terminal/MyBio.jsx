import BioApi from "./BioApi";

function Mybio() {
  return (
    <>
      {BioApi ? (
        <div className="bioProfile">
          <div className="pic">
            <img src={BioApi.avtor} alt="" />
            <div className="b_d">
              <h3 className="userBio">{BioApi.bioUser}</h3>
              <p className="dob">Join the world {BioApi.dob}</p>
            </div>
          </div>
          <div className="about">
            <p className="bioAbout">{BioApi.about}</p>
          </div>
          <div className="links">
            <p className="linklist">
              <img
                src="../public/gtihub.png"
                className="link_img"
                alt="github"
              />
              github <a href={BioApi.gitLink}>@{BioApi.gitName}</a>
            </p>
            <p className="linklist">
            <img
                src="../public/insta.png"
                className="link_img"
                alt="github"
              />
              instagram <a href={BioApi.instagramLink}>@{BioApi.instaName}</a>
            </p>
          </div>
        </div>
      ) : (
        "loading"
      )}
    </>
  );
}

export default Mybio;
