import { useState } from "react";
import Wallpaper from "./Wallpaper";
import Button from "./Wigets";
import WallApi from "./WallApi";
function Display() {
  const [settingWindowToggle, setSettingWindowToggle] = useState(false);
    const [wallIndex , setWallIndex] = useState();
  function ToggleSettingWinodwHundle() {
    setSettingWindowToggle(!settingWindowToggle);
  }

  function ClickWallpapar(DataId){
    setWallIndex(DataId);
  }
  return (
    <>
      <div className="setting">
        <div className="setting_icon">
          <Button
            title="🕸"
            Click={ToggleSettingWinodwHundle}
            class="Setting_button"
          />
        </div>
        <div
          className={
            settingWindowToggle
              ? "setting_window_Active"
              : "setting_window_Hide"
          }
        >
          <div className="close">
            <Button
              title="Back"
              class="back"
              Click={ToggleSettingWinodwHundle}
            />
          </div>
          <div className="choose">
            <label htmlFor="chooseFile">
              <p className="chooseFileClick">Choose file</p>
            </label>
            <input type="file" name="" id="chooseFile" />
          </div>
          <div className="defultTheme">
            <ul className="wall_menu">
              {WallApi.map((wall, index) => {
                return (
                  <li className="wall_list" key={index}>
                    <img src={wall.img} alt="" onClick={()=>ClickWallpapar(index)} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Wallpaper imgAPi={WallApi} imgIndex = {wallIndex} />
    </>
  );
}

export default Display;
