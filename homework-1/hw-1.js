let info = prompt("Adınızı Giriniz");
let myName = document.querySelector("#myName");

myName.innerHTML = `${info.toUpperCase()} `;

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.querySelector("#myClock").innerHTML = ` ${time}  ${date} ` ;