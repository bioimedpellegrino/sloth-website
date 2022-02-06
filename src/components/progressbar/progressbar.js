import ProgressBar from 'react-bootstrap/ProgressBar'

import './progressbar.css'

function Progress() {
  
  const selled = 200;
  const stock = 5000
  const nowPerc = selled / stock * 100;
  return (
    <div className="Progress">
      <ProgressBar animated now={10} label={`${nowPerc}%`}/>
      <span className="Progress">{`${selled}`}/{`${stock}`}</span>
    </div>
  );
}

export default Progress;