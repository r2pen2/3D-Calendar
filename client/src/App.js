import { useState, useEffect } from "react"
import './style/app.scss';
import Space from "./components/space/Space";
import Submission from "./components/submission/Submission";
import Visualizer from "./components/visualizer/Visualizer";
import Papa from "papaparse";

function App() {

  const [file, setFile] = useState();

  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const handleParse = () => {
         console.log("Parsing data");
    // If user clicks the parse button without
    // a file we show a error
    if (!file) return setError("Enter a valid file");

    // Initialize a reader which allows user
    // to read any file or blob.
    const reader = new FileReader();
     
    // Event listener on reader when the file
    // loads, we parse it and set the data.
    reader.onload = async ({ target }) => {
        const csv = Papa.parse(target.result, { header: true });
        const parsedData = csv?.data;
        const columns = Object.keys(parsedData[0]);
        setData(columns);
    };
    reader.readAsText(file);
};

  useEffect(() => {
    console.log("file changed")
  }, [file])

  const submitFile = () => {
    console.log("file submitted")
    handleParse();
  }
  
  const [submissionActive, setSubmissionActive] = useState(true);
  const [spaceActive, setSpaceActive] = useState(false);

  return (
    <div className="app">
      { spaceActive ? <Space/> : <div></div>}
      { submissionActive ? <Submission setFile={setFile} setSubmissionActive={setSubmissionActive} submitFile={submitFile}/> : <Visualizer data={data} error={error}/>}
    </div>
  );
}

export default App;
