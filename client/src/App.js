import { useState, useEffect } from "react"
import './style/app.scss';
import Space from "./components/space/Space";
import HomeScreen from "./components/homescreen/HomeScreen";

function App() {

  const [file, setFile] = useState();

  useEffect(() => {
    console.log("file changed")
  }, [file])

  const submitFile = () => {
    console.log("file submitted")
  }
  
  const [homeActive, setHomeActive] = useState(true);
  const [spaceActive, setSpaceActive] = useState(false);

  return (
    <div className="app">
      { spaceActive ? <Space/> : <div></div>}
      { homeActive ? <HomeScreen setFile={setFile} setHomeActive={setHomeActive} submitFile={submitFile}/> : <div></div>}
    </div>
  );
}

export default App;
