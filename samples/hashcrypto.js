const crypto = require("crypto");

const ALGORITHM = "aes-256-cbc";
const KEY = "qwertyuioplkjhgfdsazxcvbnmnbvcxz";
const IV = "zxcvbnmlkjhgfdsa";

function crypto_md5(txt) {
    let enctxt = crypto.createHash('md5').update(txt).digest("base64");
    return enctxt;
}

function encrypt(txt) {
    const CIPHER = crypto.createCipheriv(ALGORITHM, KEY, IV);
    let encrypt = CIPHER.update(txt, "utf8", "base64");
    encrypt += CIPHER.final("base64");
    return encrypt;
}

function decrypt(encTxt) {
    const DECIPHER = crypto.createCipheriv(ALGORITHM, KEY, IV);
    let decrypt = DECIPHER.update(encTxt, "base64", "utf8");
    decrypt += DECIPHER.final("utf8");
    return decrypt;
}

let enctxt = crypto_md5("안녕하세요");
console.log(enctxt);

let encryptTxt = encrypt("절대로 밝혀지면 안되는 정보");
console.log(encryptTxt);

let decryptTxt = decrypt(encryptTxt);
console.log(decryptTxt);
