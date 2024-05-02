import { useState } from "react";
import User from "./User";
import Ls from "./ls";
import Git from "./Gitfind";
import Mybio from "./MyBio";
import MySkill from "./Myskill";
import Error from "./Error";
import Welcome from "./Welcome";
function Cammand() {
  const [data, setdata] = useState([<Welcome/>]);
  const [maximize, setMaximize] = useState(true);
  const [rootUser, setUser] = useState("creativeMoon");
  const [cmdVal, setCmdVal] = useState("");

  const HundleMax = () => {
    setMaximize(!maximize);
  };

  const HundleInputTask = (e) => {
    setCmdVal(e.target.value);
  };
  const HundleEnterKey = (e) => {
    if (e.key == "Enter") {
      setCmdVal("");
      if (cmdVal === "ls") {
        setdata((d) => [...data, <Ls/>]);
      } else if (cmdVal === "bio") {
        setdata((d) => [...data, <Mybio/>]);
      } 
      else if (cmdVal === "git") {
        setdata((d) => [...data,<Git/> ]);
      }
      else if (cmdVal === "skill") {
        setdata((d) => [...data,<MySkill/> ]);
      }
      else if (cmdVal === "clear") {
        while (data.length > 0) {
          data.pop();
        }
      } else {
        setdata((d) => [...data, <Error/>]);
      }
    }
  };

  return (
    <>
      <div className={maximize ? "terminal_window" : "terminal_windowMax"}>
        <div className="navigation">
          <div className="navigate">
            <img className="nav_icon" src="../public/red.png" alt="close" />
            <img
              className="nav_icon"
              onClick={HundleMax}
              src="../public/yellow.png"
              alt="max"
            />
            <img className="nav_icon" src="../public/green.png" alt="min" />
          </div>
          <div className="title_box">
            <p className="title">{rootUser}/Terminal</p>
          </div>
        </div>
        <div className="taskShow">
          <ul>
            {data.map((v, index) => {
              return (
                <>
                  <li key={index}>
                    {/* cammand task name */}
                    <div className="cmd_show">
                      <User RootUser={rootUser} />
                    </div>
                    {/* cammand work */}
                    <div className="data">{v}</div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div className="userCammand">
          <User RootUser={rootUser} />
          <input
            type="text"
            placeholder="enter Cammand"
            className="cammand_take"
            value={cmdVal}
            onChange={HundleInputTask}
            onKeyDown={HundleEnterKey}
          />
        </div>
      </div>
    </>
  );
}

export default Cammand;
