import "./App.css";
import React from "react";
import ButtonComponent from "./ButtonComponent";
import NewComponent from "./NewComponent";
import NewClassComponent from "./NewClassComponent";
import BootstrapComponent from "./BootstrapComponent";

function App() {
  //
  // let myName = "daonq";
  // let divCss = {
  //   width: "200px",
  //   height: "400px",
  //   backgroundColor: "red", // CSS background-color
  // };

  // return React.createElement("div", null, React.createElement("h1", null, "Hello VTI"), React.createElement("h2", null, "Hello Railway93")); // div Hello DAONQ div
  return (
    <>
      <div className="App">
        <h1>Hello VTI Academy</h1>
        <ButtonComponent />
        <ButtonComponent />
        <ButtonComponent />
        <NewComponent />
        <NewClassComponent />
        <BootstrapComponent />
      </div>
    </>
  );
}

export default App;
// createElement: tạo và hiển thị các thành phần lên giao diện

//  Đây không phải là những thẻ HTML
// JSX: javascript + html
