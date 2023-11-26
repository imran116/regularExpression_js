let phone = document.querySelector('#phone');
let gmail = document.querySelector('#gmail');
let postcode = document.querySelector('#postcode');
let website = document.querySelector('#website');
let aplhanumeric = document.querySelector('#alphanumeric');
let ipaddress = document.querySelector('#ipaddress');
let date = document.querySelector('#date');

phone.addEventListener('click',checkPhone);
gmail.addEventListener('click',checkGmail);
postcode.addEventListener('click', checkPostcode);
website.addEventListener('click', checkWebsite);
aplhanumeric.addEventListener('click', checkAlphanumeric);
ipaddress.addEventListener('click', checkIpaddress);
date.addEventListener('click', checkDate);

function checkPhone() {
    let input = prompt("Enter BD Phone Number:");
    let expression = /^(\+)?(88)?01[0-9]{9}$/;
    if (expression.test(input)) {
        alert("Your Number is valid.")
    } else {
        alert("Your number is Invalid!!!")
    }

}

function checkGmail() {
    let input = prompt("Enter Gmail:");
    let expression = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
    if (expression.test(input)) {
        alert("Your Gmail is valid.")
    } else {
        alert("Your Gmail is Invalid!!!")
    }

}

function checkPostcode() {
    let input = prompt("Enter Post Code:");
    let expression = /^[0-9]{4}$/;
    if (expression.test(input)) {
        alert("Your Post Code is valid.")
    } else {
        alert("Your Post Code is Invalid!!!")
    }

}


function checkWebsite() {
    let input = prompt("Enter Website:");
    let expression = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
    if (expression.test(input)) {
        alert("Your Website is valid.")
    } else {
        alert("Your Website is Invalid!!!")
    }

}


function checkAlphanumeric() {
    let input = prompt("Enter Alpha Numeric:");
    let expression = /^[a-zA-Z0-9]+$/;
    if (expression.test(input)) {
        alert("Your Alpha Numeric is valid.")
    } else {
        alert("Your Alpha Numeric is Invalid!!!")
    }

}


function checkIpaddress() {
    let input = prompt("Enter IP Address(IPv4):");
    let expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    if (expression.test(input)) {
        alert("Your IP Address(IPv4) is valid.")
    } else {
        alert("Your IP Address(IPv4) is Invalid!!!")
    }

}


function checkDate() {
    let input = prompt("Enter Date:");
    let expression = /^\d{4}-\d{2}-\d{2}$/;
    if (expression.test(input)) {
        alert("Your Date is valid.")
    } else {
        alert("Your Date is Invalid!!!")
    }

}

