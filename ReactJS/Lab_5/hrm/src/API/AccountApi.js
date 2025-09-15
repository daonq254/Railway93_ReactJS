// Định nghĩa ra các phương thức làm việc với API của Account

import { api } from "./api";

export let getListAccountAPI = () => {
  return api("GET", "accounts", null); // listAccount
};

export let createNewAccountAPI = (accountNEW) => {
  return api("POST", "accounts", accountNEW); // listAccount
};
