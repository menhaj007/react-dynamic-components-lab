import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }
  
  render() {
    const nValue = this.props.opacity -0.1;

    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {this.props.opacity > 0.2? <ColorBox opacity = {nValue} />:null }
      </div>
    )
  }

}

// export default class Example extends Component {
//   render() {
//     const newValue = this.props.value * 2;
//     return this.props.value > 100 ? null : ( <div>
//         <Example value={newValue} />
//       </div>)
//   }
// }
