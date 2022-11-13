// Task Class-2
//nodejs built in packages

const os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Host Name:"+ os.hostname());
console.log("Name of OS:"+os.type());
console.log("User Info:"+os.userInfo());

const myInt = setInterval(function () {
    console.log("Welcome node js world");
}, 5000);