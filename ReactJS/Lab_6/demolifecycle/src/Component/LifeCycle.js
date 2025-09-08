import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    console.log("Bước 1: Contructor");
    super(props);
    this.state = {
      msg: "VTI Academy",
    };
  }
  //
  handleChange = () => {
    console.log("handleChange");
    this.setState({
      msg: "Railway 93",
    });
  };
  //
  render() {
    console.log("Bước 2: Render");

    return (
      <>
        <h3>This is {this.state.msg} </h3>
        <button onClick={this.handleChange}>Change State</button>
      </>
    );
  }

  //

  componentDidMount() {
    console.log("Bước 3: componentDidMount");
  }

  //
  componentDidUpdate() {
    console.log("Bước 4: componentDidUpdate");
  }

  componentWillUnmount() {
    //
  }
}

export default LifeCycle;
