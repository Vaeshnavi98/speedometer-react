import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    const {count} = this.state
    if (count <= 190) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  break = () => {
    const {count} = this.state
    if (count >= 10) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-div">
        <h1>Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img-deco"
        />
        <h2>Speed is {count}mph</h2>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-div">
          <button
            onClick={this.accelerate}
            className="acc-button"
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.break} className="brk-button" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
