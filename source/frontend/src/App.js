import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [summary, setSummary] = useState("loading...");
  const [contributors, setContributors] = useState();
  const [errors, setErrors] = useState([]);
  const longestBarPct = 85;

  useEffect(() => {
    fetch("api/summary.php")
      .then(res => res.text()).then(setSummary)
      .catch(err => setErrors([...errors,err]))
    fetch("api/detail.php")
      .then(res => res.json()).then(setContributors)
      .catch(err => setErrors([...errors,err]))
  }, [errors])
  
  return (
    <div className="App">
      <h1>This month's github activity</h1>
      <h2 className="summary" dangerouslySetInnerHTML={{__html: summary}}></h2>
      {errors.length ?
        <div className="errors">
          {errors.map((error, index) => (
            <div key={index}>
              { JSON.stringify(error) }
            </div>
          ))}
        </div>
      :null}
      {contributors ?
        <div className="contributors">
          {contributors.map((contributor, index) => (
            <div key={index}>
              <img src={contributor.gravatar} alt="User's Avatar" />
              <div className="summary-bar">
                <div className="background-bar"
                     style={{width:`${contributor.commits * longestBarPct / contributors[0].commits}%`}} />
                <strong>{contributor.name}</strong> authored <strong>{contributor.commits}</strong>
                {` commit${contributor.commits===1 ? '' : 's'}`}
              </div>
            </div>
          ))}
        </div>
      :null}
    </div>
  );
}

export default App;
