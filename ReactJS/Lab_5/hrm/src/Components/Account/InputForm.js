import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
function InputForm({ onHandleCreateAccount, listDepartment, listPosition }) {
  // Tạo State để lưu trữ dữ liệu trong các ô nhập liệu
  let [Email, setEmail] = useState("");
  let [Username, SetUsername] = useState("");
  let [Fullname, SetFullname] = useState("");
  let [Department, SetDepartment] = useState("");
  let [Postion, SetPostion] = useState("");

  // Hàm xử lý sự kiện khi nhấn nút Create
  let handleCreate = () => {
    // console.log(Email);
    // console.log(Username);
    // console.log(Fullname);
    // console.log(Department);
    // console.log(Postion);

    // AccountNew
    let accountNew = {
      // id: 1,
      email: Email,
      username: Username,
      fullname: Fullname,
      departmentId: Department,
      positionId: Postion,
      // createDate: "10-09-2025",

      //   {
      //     "email": "Test2@viettel.com",
      //     "username": "Test2",
      //     "fullname": "Test2",
      //     "departmentId": "4",
      //     "positionId": "3"
      // }
    };

    onHandleCreateAccount(accountNew);
  };

  let itemsDepartment = listDepartment.map((department, index) => {
    //
    return (
      <option value={department.id} key={index}>
        {department.name}
      </option>
    );
  });

  let itemsPosition = listPosition.map((position, index) => {
    //
    return (
      <option value={position.id} key={index}>
        {position.name}
      </option>
    );
  });

  return (
    <>
      <Form>
        {/* Email */}
        <FormGroup>
          <Label for="Email">Email: </Label>
          <Input
            id="Email"
            name="Email"
            placeholder="Input Email"
            type="email"
            value={Email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </FormGroup>

        {/* Username */}
        <FormGroup>
          <Label for="Username">Username: </Label>
          <Input
            id="Username"
            name="Username"
            placeholder="Input Username"
            type="text"
            value={Username}
            onChange={(event) => {
              SetUsername(event.target.value);
            }}
          />
        </FormGroup>

        {/* Fullname */}
        <FormGroup>
          <Label for="Fullname">Fullname: </Label>
          <Input
            id="Fullname"
            name="Fullname"
            placeholder="Input Fullname"
            type="text"
            value={Fullname}
            onChange={(event) => {
              SetFullname(event.target.value);
            }}
          />
        </FormGroup>

        {/* Department */}
        <FormGroup>
          <Label for="Department">Select a Department: </Label>
          <Input
            id="Department"
            name="Department"
            type="select"
            value={Department}
            onChange={(event) => {
              SetDepartment(event.target.value);
            }}
          >
            {itemsDepartment}
            {/* <option value={"Bán hàng"}>Bán hàng</option>
            <option value={"Bảo vệ"}>Bảo vệ</option>
            <option value={"Giám đốc"}>Giám đốc</option>
            <option value={"Kỹ thuật"}>Kỹ thuật</option>
            <option value={"Marketing"}>Marketing</option> */}
          </Input>
        </FormGroup>

        {/* Postion */}
        <FormGroup>
          <Label for="Postion">Select a Postion: </Label>
          <Input
            id="Postion"
            name="Postion"
            type="select"
            value={Postion}
            onChange={(event) => {
              SetPostion(event.target.value);
            }}
          >
            {itemsPosition}
            {/* <option value={"Dev"}>Dev</option>
            <option value={"Test"}>Test</option>
            <option value={"Scrum_Master"}>Scrum_Master</option>
            <option value={"PM"}>PM</option> */}
          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleCreate}>
        Create
      </Button>
      <Button color="danger">Reset</Button>
    </>
  );
}

export default InputForm;
