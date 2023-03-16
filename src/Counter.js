import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:5
      }
    }
    
  render() {
    return (
      <div className="card">
        <h1>Simple Counter Application</h1>
        <div className='counter-box'>
            <h3>Counter: {this.state.Counter}</h3>
        </div>
        <div className='btn-section'>
            <button className='btn' onClick={()=>{this.setState({Counter:0})}}>Reset</button>
            <button className='btn' onClick={()=>{this.setState({Counter:this.state.Counter+5})}}>Increment</button>
            <button className='btn' onClick={()=>{this.setState({Counter:this.state.Counter-5})}}>Decrement</button>

        </div>
        
      </div>
    )
  }
}
export default Counter