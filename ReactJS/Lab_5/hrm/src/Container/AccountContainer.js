import React, { useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResultForm from "../Components/Account/ResultForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";
import Axios from "axios";

function AccountContainer(props) {
  let [showForm, setShowForm] = useState(false);
  let [listAccount, setListAccount] = useState([]);
  // Khai báo State để quản lý danh sách Account trên hệ thống
  let [listPosition, setListPosition] = useState([]);

  // Khai báo State để quản lý danh sách Account trên hệ thống
  let [listDepartment, setListDepartment] = useState([]);

  //  khai báo hàm callback xử lý khi nhấn nút CreateNewAccount
  let onHandleCreateNewAccount = () => {
    //
    setShowForm(true);
  };

  //  khai báo hàm callback xử lý khi nhấn nút Close ở Modal
  let onHandleCloseModal = () => {
    //
    setShowForm(false);
  };

  // Hàm tạo Account
  let onHandleCreateAccount = (accountNew) => {
    //
    // console.log(`accountNew: ${accountNew.id}`);
    // listAccount.push(accountNew);
    listAccount.push(accountNew);
    setListAccount(listAccount);
    // Lưu trữ vào Local Storage
    localStorage.setItem("listAccount", JSON.stringify(listAccount));
    // Đóng form thêm mới
    setShowForm(false);
  };
  //
  let fetchListAccountAPI = () => {
    Axios.get("http://localhost:8080/api/v1/accounts").then((response) => {
      // console.log("response: ", response);
      let listAccountAPI = response.data;
      console.log("listAccountAPI: ", listAccountAPI);
      setListAccount(listAccountAPI);
    });
  };

  //
  let fetchListDepartmentAPI = () => {
    Axios.get("http://localhost:8080/api/v1/departments").then((response) => {
      // console.log("response: ", response);
      let listDepartmentAPI = response.data;
      setListDepartment(listDepartmentAPI);
    });
  };
  //
  //
  let fetchListPositionAPI = () => {
    Axios.get("http://localhost:8080/api/v1/possitions").then((response) => {
      // console.log("response: ", response);
      let listPositionAPI = response.data;
      setListPosition(listPositionAPI);
    });
  };
  useEffect(() => {
    //
    //
    //   if (localStorage && localStorage.getItem("listAccount")) {
    //     let listAccount_LocalStorage = JSON.parse(localStorage.getItem("listAccount"));
    //     setListAccount(listAccount_LocalStorage);
    //     // Json
    //     // console.log(`listAccount_LocalStorage: ${listAccount_LocalStorage[0].id}`);
    //   }
    // }, []);
    //  Load dữ liệu API
    fetchListAccountAPI();
    fetchListDepartmentAPI();
    fetchListPositionAPI();
  });
  //
  return (
    <>
      <CreateButton onHandleCreateNewAccount={onHandleCreateNewAccount} />
      <ResultForm listAccount={listAccount} />
      <ModalCreateNewAccount
        showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateAccount={onHandleCreateAccount}
        listDepartment={listDepartment}
        listPosition={listPosition}
      />
    </>
  );
}

export default AccountContainer;
