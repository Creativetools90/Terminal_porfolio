import SKillApi from "./Lavel";
function MySkill() {
  return (
    <>
      <div className="skillContainer">
        {SKillApi.map((v, index) => {
          const lavelBar = {
            width: `${v.lavel}%`,
          };
          return (
            <div className="lavel" key={index}>
              <div className="SkillName">
                <img src={v.avtor} alt={v.skillName} className="s_a" />
                <p className="s_name">{v.skillName}</p>
              </div>
              <div className="skillLeval">
                <div className="progress">
                  <div className="bar" style={lavelBar}>
                    <p className="percentage">{v.lavel}%</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default MySkill;
