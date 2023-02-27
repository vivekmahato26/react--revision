import { useState } from "react";
import Countdown from "./components/countdown";
import Props from "./components/props";
import State from "./components/state";

import styles from "./App.module.css";

function App() {
  const user = {
    name: "Vivek",
    age: "29",
    "phone": "8303894559"
  }

  const clickFun = (surname) => {
    user.name = user.name + " " + surname
    console.log(user);
  }
  let arr = [1, 2, 5, 4, 8]
  let jsx = arr.map(tttt => {
    tttt = tttt * 10
    return (
      <p key={tttt}>{tttt}</p>
    )
  })
  console.log(jsx);

  const [view,setView] = useState(true);
  return (
    <div>
      {/* <Props tempData={user}>
        <p>Children </p>
        <p>{user.name}</p>
      </Props>
      <p onClick={() => { console.log(user) }} >Click Me!</p>
      {jsx} */}
      {/* <State/> */}
      {/* <button onClick={()=>setView(!view)}>Change View State</button> */}
      {/* {view && <State/>} */}
      <Countdown/>
      <p className={styles.container}>bg color</p>
    </div>
  );
}

export default App;
