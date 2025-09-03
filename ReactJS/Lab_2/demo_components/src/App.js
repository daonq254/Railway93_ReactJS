import "./App.css";
import ComponentsTop from "./Component/ComponentsTop";
import ComponentsBottom from "./Component/ComponentsBottom";

function App() {
  let dataApp1 = "Data From App to Top";
  let dataApp2 = "COMPONENT TOP";

  let dataApp3 = "Data From App to Bottom";
  let dataApp4 = "COMPONENT BOTTOM";
  // Khai báo hàm callback
  let onHandleSentData = (data) => {
    //
    console.log(`data: ${data}`);
  };
  //
  return (
    <>
      <div class="container">
        <ComponentsTop dataApp1={dataApp1} dataApp2={dataApp2} onHandleSentData={onHandleSentData} />
        <ComponentsBottom dataApp3={dataApp3} dataApp4={dataApp4} />
      </div>
    </>
  );
}

export default App;
