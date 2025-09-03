// rcc
import React, { Component } from "react";

class ComponentsTop extends Component {
  //
  // click_number = 0; // Biến bình thường  ==> State
  // Được gọi đầu tiên khi Component được load
  constructor(props) {
    super(props);
    // Khai báo State
    // this.state = {
    //   click_number: 0,
    //   // stateA: 1,
    //   // stateb: 2,
    // };
  }

  // Hàm xử lý sự kiện khi nhấn nút Sent Data
  hanldeSentData = () => {
    // this.click_number = this.click_number + 1;
    // console.log(`click_number ${this.click_number}`); // 1
    // this.setState({
    //   click_number: this.state.click_number + 1,
    // });
    let dataFromTopToApp = "dataFromTopToApp";
    // let student = {
    //   id: 1,
    //   name: "daonq",
    // };
    this.props.onHandleSentData(dataFromTopToApp);
  };

  // Dùng để hiển thị giao diện
  render() {
    // Nhận lại dữ liệu props
    // let dataApp1 = this.props.dataApp1;
    // let dataApp2 = this.props.dataApp2;
    // Destructuring
    let { dataApp1, dataApp2 } = this.props;

    console.log(`dataApp1: ${dataApp1}`); //"Data From App to Top"
    console.log(`dataApp2: ${dataApp2}`); //
    return (
      <>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title">{dataApp2}</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <button type="button" className="btn btn-danger" onClick={this.hanldeSentData}>
                      Sent Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ComponentsTop;
