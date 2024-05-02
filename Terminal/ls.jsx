import CmdList from "./CmdList";
function Ls() {
  return (
    <>
      <ul className="list">
        {CmdList.map((list, i) => {
          return (
            <li key={i} className="ls_list">
              {list.task}
              <div className="info" >{list.work}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Ls;
