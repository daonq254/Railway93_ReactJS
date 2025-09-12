import React from "react";
import { Button } from "reactstrap";

function CreateButton({ onHandleCreateNewAccount }) {
  let handleCreateNewAccount = () => {
    onHandleCreateNewAccount();
  };
  return (
    <>
      <Button color="primary" onClick={handleCreateNewAccount}>
        Create New Account
      </Button>
    </>
  );
}

export default CreateButton;
