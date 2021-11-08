let info = prompt("Adınızı Giriniz");
let myName = document.querySelector("#myName");

myName.innerHTML = `${info.toUpperCase()} `;


function digitalSaat() {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    document.querySelector("#myClock").innerHTML = ` ${time}  ${date} ` ;
    
}

var time = setInterval(digitalSaat,100);
