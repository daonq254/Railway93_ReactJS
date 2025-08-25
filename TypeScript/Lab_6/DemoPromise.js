// Demo tạo account
// Check Email
// Check Username
// Tạo mới Account
// Phần khai báo các hàm
// Check Email
function CallAPIcheckEmail() {
    return new Promise(function (resolve, reject) {
        //   $.ajax({
        //     url: "http://localhost:8080/api/v1/checkEmail/",
        //     type: "GET",
        //     contentType: "application/json",
        //     success: function (resultCheck, Status, xhr) {
        let resultCheck = false;
        if (resultCheck) {
            reject("This Email is Exists!!"); // Dừng
        }
        else {
            resolve("Check Email OK!!");
        }
        // },
        //     error(jqXHR, textStatus, errorThrown) {},
        //   });
    });
}
// Check Username
function CallAPIcheckUsername() {
    return new Promise(function (resolve, reject) {
        //   $.ajax({
        //     url: "http://localhost:8080/api/v1/checkUsername/",
        //     type: "GET",
        //     contentType: "application/json",
        //     success: function (resultCheck, Status, xhr) {
        let resultCheck = false;
        if (resultCheck) {
            reject("This Username is Exists!!");
        }
        else {
            resolve("Check Username OK!!");
        }
        // },
        //     error(jqXHR, textStatus, errorThrown) {},
        //   });
    });
}
// Tạo mới Account
function CallAPIcreateNewAccount() {
    return new Promise(function (resolve, reject) {
        //   $.ajax({
        //     url: "http://localhost:8080/api/v1/createNewAccount/",
        //     type: "GET",
        //     contentType: "application/json",
        //     success: function (reusult, Status, xhr) {
        let reusult = true;
        if (reusult) {
            resolve("Create New Account Successfuly!!");
        }
        else {
            reject("An Eror has occurred!!");
        }
        // },
        //     error(jqXHR, textStatus, errorThrown) {},
        //   });
    });
}
// CallAPIcheckEmail();
// CallAPIcheckUsername();
// CallAPIcreateNewAccount();
// Phần sử dụng
CallAPIcheckEmail()
    .then(function (msg) {
    console.log(msg);
    return CallAPIcheckUsername();
})
    .then(function (msg) {
    console.log(msg);
    return CallAPIcreateNewAccount();
})
    .then(function (msg) {
    //
    console.log(msg);
})
    .catch(function (err) {
    console.log(err);
});
