import { ADD_ACCOUNT } from "../Constants/AccountActionType";

export let actionCreateNewAccount = (accountNew) => {
  return {
    type: ADD_ACCOUNT,
    account: accountNew,
  };
};
