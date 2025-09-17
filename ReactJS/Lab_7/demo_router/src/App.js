import "./App.css";
import Menu from "./Component/Menu/Menu";
import { routes } from "./Router/Route";
function App() {
  return (
    <div className="App">
      {/* Menu*/}
      <div className="container">
        <Menu />
      </div>
      {/*  */}
      {/* Khai báo ra bảng định tuyến */}
      {routes}
    </div>

    //
  );
}

export default App;
