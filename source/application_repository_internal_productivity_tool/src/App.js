import React, { Component } from "react";

import "./App.css";
import publishManagerWantsProductivityToolResults from "./publishManagerWantsProductivityToolResults.js";

class App extends Component {
  render() {
    return (
      <div>
        <select
          value={this.state.repositoryProductivityDesired}
          onChange={event =>
            this.setState({ repositoryProductivityDesired: event.target.value })
          }
        >
          <option value="team1Repository1Store">
            Developer 1 Repository 1 Store Feature
          </option>
          <option value="team1Repository2User">
            Developer 1 Repository 2 User Feature
          </option>
          <option value="team2Repository2Payment">
            Developer 2 Repository 1 Payment Feature
          </option>
          <option value="team2Repository2Receipts">
            Developer 2 Repository 2 Receipts Feature
          </option>
        </select>

        <button onClick={this.onClickOfButtonGetRepositoryProductivity}>
          Get Productivity of Developers
        </button>
      </div>
    );
  }
  onClickOfButtonGetRepositoryProductivity = () => {
    publishManagerWantsProductivityToolResults(
      this.state.repositoryProductivityDesired
    );
  };

  state = {
    repositoryProductivityDesired: "team1Repository1Store"
  };
}

export default App;
