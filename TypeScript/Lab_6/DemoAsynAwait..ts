// Asyn Await

function CallAPIcheckEmail() {
  //   $.ajax({
  //     url: "http://localhost:8080/api/v1/checkEmail/",
  //     type: "GET",
  //     contentType: "application/json",
  //     success: function (resultCheck, Status, xhr) {
  let resultCheckEmail = false;
  return resultCheckEmail;
}
//
function CallAPIcheckUsername() {
  //   $.ajax({
  //     url: "http://localhost:8080/api/v1/checkEmail/",
  //     type: "GET",
  //     contentType: "application/json",
  //     success: function (resultCheck, Status, xhr) {
  let resultCheckUsername = false;
  return resultCheckUsername;
}
//
function CallAPIcreateNewAccount() {
  //   $.ajax({
  //     url: "http://localhost:8080/api/v1/createNewAccount/",
  //     type: "GET",
  //     contentType: "application/json",
  //     success: function (reusult, Status, xhr) {
  let resultCreateNewAccount = false;
  return resultCreateNewAccount;
}

//
async function createAccount() {
  let rs_checkEmail = await CallAPIcheckEmail(); //10s

  if (rs_checkEmail) {
    return false;
  }
  let rs_checkUsername = await CallAPIcheckUsername(); //10s
  if (rs_checkUsername) {
    return false;
  }
  await CallAPIcreateNewAccount();
}

// Gọi hàm
createAccount();
