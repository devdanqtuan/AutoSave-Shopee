const aVourchers = ["RWSTUP0524","COSOAP2"];
async function addVoucher(oPayload){
try {
 
const response = await fetch("https://shopee.vn/api/v2/voucher_wallet/save_voucher", {
  "headers": {
"accept": "application/json",
"accept-language": "en-US,en;q=0.9",
"cache-control": "no-cache",
"content-type": "application/json",
"pragma": "no-cache",
"sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
"sec-ch-ua-mobile": "?0",
"sec-ch-ua-platform": "\"Windows\"",
"sec-fetch-dest": "empty",
"sec-fetch-mode": "cors",
"sec-fetch-site": "same-origin",
"x-api-source": "pc",
"x-requested-with": "XMLHttpRequest",
"x-shopee-language": "vi",
"x-sz-sdk-version": "3.1.0-2&1.5.1"
  },
  "referrer": "https://shopee.vn/user/voucher-wallet",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": JSON.stringify(oPayload),
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
const responseData = await response.json();
if(responseData && responseData.error == 4){
console.error("Thêm  Voucher: " + oPayload.voucher_code +" - Lỗi: " + responseData.error_msg);
}else{
console.log("Thêm Voucher thành công:", oPayload.voucher_code);
}
} catch (error) {
    console.error("Thêm Voucher lỗi: ",error);
  }
}
 
aVourchers.forEach((voucher)=>{
let oPayload = {"voucher_code":voucher,"need_user_voucher_status":true};
this.addVoucher(oPayload);
 
});