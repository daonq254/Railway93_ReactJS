import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import InputForm from "./InputForm";
import { useSelector } from "react-redux";
function ModalCreateNewAccount({ onHandleCloseModal, onHandleCreateAccount, listDepartment, listPosition }) {
  //
  let handleClose = () => {
    onHandleCloseModal();
  };
  //
  let stateRedux = useSelector((state) => state);
  let showForm = stateRedux.formReducer.showForm;
  return (
    <>
      <Modal isOpen={showForm}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm onHandleCreateAccount={onHandleCreateAccount} listDepartment={listDepartment} listPosition={listPosition} />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalCreateNewAccount;
