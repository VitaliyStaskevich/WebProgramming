import React from "react";
import "./styles.css";

/**
 * Define Regions, a React component of Lab9. The model
 * data for this view (the regions names) is available at
 * window.lab9models.regionsModel().
 */
class Regions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      substr: "",
      filteredRegions: window.lab9models.regionsModel(),
    };

    this.handleChangeSubstr = (event) => this.handleChange(event);
  }

  handleChange(event) {
    const substr = event.target.value.toLowerCase();
    const filteredRegions = window.lab9models.regionsModel().filter(region =>
      region.toLowerCase().includes(substr)
    ).sort();
    this.setState({ substr, filteredRegions });
  }

  render() {
    return (
      <div>
        <div className="state-search">
          {this.state.substr}
        </div>
        <div className="lab9-example-output">
          <span id='IInfo'>
            {this.state.filteredRegions.length > 0 ? (
              <ul>
                {this.state.filteredRegions.map((region, index) => (
                  <li key={index}>{region}</li>
                ))}
              </ul>
            ) : (
              <p>No matching medicine found</p>
            )}
          </span>
        </div>
        <label htmlFor="substrId">Enter substring to search:</label>
        <input
          id="substrId"
          type="text"
          value={this.state.substr}
          onChange={this.handleChangeSubstr}
        />
      </div>
    );
  }
}

export default Regions;