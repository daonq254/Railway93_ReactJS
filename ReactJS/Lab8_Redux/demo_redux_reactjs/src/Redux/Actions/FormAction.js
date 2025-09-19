import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Constants/FormActionType";

export let actionShowInpuForm = () => {
  return {
    type: SHOW_INPUT_FORM,
  };
};

export let actionCloseInpuForm = () => {
  return {
    type: CLOSE_INPUT_FORM,
  };
};
