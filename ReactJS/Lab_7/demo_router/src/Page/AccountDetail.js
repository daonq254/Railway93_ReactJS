import React from "react";
import { useParams } from "react-router-dom";

function AccountDetail(props) {
  // Lấy lại id của account
  let param = useParams(); //
  let accountID = param.idParam;

  console.log("accountID: ", accountID); //2

  return <div>AccountDetail Page</div>;
}

export default AccountDetail;
