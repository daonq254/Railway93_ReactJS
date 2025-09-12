import React from "react";
import { Button } from "reactstrap";

function ResultFormItem({ listAccount }) {
  // console.log(`listAccount_ResultFormItem: ${listAccount[0]}`);

  //
  let items = listAccount.map((account, index) => {
    //
    return (
      <tr key={index}>
        <td>{account.id}</td>
        <td>{account.email}</td>
        <td>{account.username}</td>
        <td>{account.fullname}</td>
        <td>{account.department}</td>
        <td>{account.position}</td>
        <td>{account.createDate}</td>
        <td>
          <Button color="warning">Edit</Button>
        </td>
        <td>
          <Button color="warning">Delete</Button>
        </td>
      </tr>
    );
  });

  return items;
  // <tr>
  //   <td>1</td>
  //   <td>daonq@viettel.com.vn</td>
  //   <td>daonq</td>
  //   <td>Nguyen Dao</td>
  //   <td>Sale</td>
  //   <td>Dev</td>
  //   <td>2022-02-22</td>
  //   <td>
  //     <Button color="warning">Edit</Button>
  //   </td>
  //   <td>
  //     <Button color="warning">Delete</Button>
  //   </td>
  // </tr>
}

export default ResultFormItem;
