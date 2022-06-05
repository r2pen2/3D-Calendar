import './visualizer.scss';

export default function Visualizer({data, error}) {

  return (
    <div className="visualizer">
        {error ? error : data.map((col,
                  idx) => <div key={idx}>{col}</div>)}
    </div>
  )
}
