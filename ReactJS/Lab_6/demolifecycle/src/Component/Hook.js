import React, { useEffect, useState } from "react";

function Hook(props) {
  // Khai báo State Lưu trữ số lần nhấn vào nút click1
  let [count1, setCount1] = useState(0); // count1 = 0
  let [count2, setCount2] = useState(0); // count2 = 0

  // setCount1(giá trị mới)  ==> count1= giá trị mới
  // Khai báo useEffect()
  useEffect(() => {
    console.log("Code 1");
  }, [count1]);
  //
  useEffect(() => {
    console.log("Code 2");
  }, [count2]);
  //

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setCount1(count1++);
              }}
            >
              Click 1
            </button>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h3>Bạn đã Click vào nút Click 1 {count1} lần</h3>
          </div>
        </div>

        {/*  */}
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                setCount2(count2++);
              }}
            >
              Click 2
            </button>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <h3>Bạn đã Click vào nút Click 2 {count2} lần</h3>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}

export default Hook;
