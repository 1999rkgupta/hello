// import React, { useState } from "react";

// const State = () => {
//   let [state, setState] = useState({
//     count: 0,
//   });
//   let onChangeHandle = () => {
//     setState({ count: state.count + 1 }, () => {
//       console.log("hello");
//     });
//   };
//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button onClick={onChangeHandle}>Increment</button>
//     </div>
//   );
// };

// export default State;

import React, { Component } from "react";

export default class State extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  onChangeHandle = () => {
    this.setState({ count: this.state.count + 1 }, e => {
        console.log("hello");
        
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <button onClick={this.onChangeHandle}>Increment</button>
      </>
    );
  }
}
