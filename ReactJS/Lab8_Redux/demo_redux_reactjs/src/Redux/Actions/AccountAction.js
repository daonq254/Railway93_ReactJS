import { ADD_ACCOUNT } from "../Constants/AccountActionType";

export let actionCreateNewAccount = (accountNew) => {
  return {
    type: ADD_ACCOUNT,
    account: accountNew,
  };
};

// export let actionCreateNewAccount1 = {
//   type: ADD_ACCOUNT,
//   account: {
//     id: 1,
//     name: "daonq1",
//   },
// };

// export let actionCreateNewAccount2 = {
//   type: "ADD_ACCOUNT",
//   account: {
//     id: 2,
//     name: "daonq2",
//   },
// };
