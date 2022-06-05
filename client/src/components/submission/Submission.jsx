import "./submission.scss";
import Typewriter from 'typewriter-effect'

export default function Submission( {setFile, setSubmissionActive, submitFile }) {

  
  const fileReader = new FileReader();


  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  }
  
  return (
    <div className="homescreen">
      <div className="titleWrapper">
        <h1>3D Calendar</h1>
        <h2>Visualize your<span><Typewriter options={{ strings: ['Expenses', 'Time Commitments', 'Earnings', 'Homework', '...'], autoStart: true, loop: true, }} /></span></h2>
      </div>
      <div className="importWrapper">
        <form>
          <input 
            type={"file"} 
            id={"csvFileInput"} 
            accept={".csv"} 
            onChange={handleOnChange}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              setSubmissionActive(false);
              submitFile();
            }}
          >
            IMPORT CSV
          </button>
        </form>
      </div>
    </div>
    
  )
}
