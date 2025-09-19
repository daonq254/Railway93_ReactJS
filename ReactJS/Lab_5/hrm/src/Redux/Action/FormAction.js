import { CLOSE_INPUT_FORM, CLOSE_INPUT_FORM_, SHOW_INPUT_FORM, SHOW_INPUT_FORM_ } from "./../Contants/FormActionType";
export let actionShowInpuForm = () => {
  return {
    type: SHOW_INPUT_FORM_,
  };
};

export let actionCloseInpuForm = () => {
  return {
    type: CLOSE_INPUT_FORM_,
  };
};
