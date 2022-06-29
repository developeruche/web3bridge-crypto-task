const CryptoJS = require("crypto-js");

// The Cipher i would be working with is RC4 (which stands for Rivest Cipher 4)
// A very old Cryptographic function used in the 1980s

let encrypted = CryptoJS.RC4.encrypt("Message", "Secret Password");

console.log(encrypted, "Encrypted Text");
​
let decrypted = CryptoJS.RC4.decrypt(encrypted, "Secret Password");

console.log(decrypted, "Original Text");