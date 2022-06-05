import './visualizer.scss';
import { useState, useEffect } from "react"

export default function Visualizer({data, error}) {

  if (data) {
    console.log(data)
  }

  return (
    <div className="visualizer">
      {data ? <div>
        {data.map((row)=> {
          return(<div className="csvRow">{row.Date} — {row.Value}</div>)
        })}
      </div> : <div></div>}
    </div>
  )

  //return (
  //  <div className="visualizer">
  //    {error ? error : data.map((col, idx) => <div key={idx}>{col}</div>)}
  //  </div>
  //);
}
