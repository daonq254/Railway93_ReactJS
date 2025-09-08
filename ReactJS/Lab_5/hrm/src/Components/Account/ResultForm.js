import React from "react";
import { Button, Table } from "reactstrap";

function ResultForm(props) {
  return (
    <>
      <br />
      <h3>Danh sách Account</h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Fullname</th>
            <th>Department</th>
            <th>Position</th>
            <th>Cretate Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>daonq@viettel.com.vn</td>
            <td>daonq</td>
            <td>Nguyen Dao</td>
            <td>Sale</td>
            <td>Dev</td>
            <td>2022-02-22</td>
            <td>
              <Button color="warning">Edit</Button>
            </td>
            <td>
              <Button color="warning">Delete</Button>
            </td>
          </tr>

          <tr>
            <td>1</td>
            <td>daonq@viettel.com.vn</td>
            <td>daonq</td>
            <td>Nguyen Dao</td>
            <td>Sale</td>
            <td>Dev</td>
            <td>2022-02-22</td>
            <td>
              <Button color="warning">Edit</Button>
            </td>
            <td>
              <Button color="warning">Delete</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default ResultForm;
