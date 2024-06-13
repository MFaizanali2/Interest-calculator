let user_amount = document.getElementById("user1");
let user_rate = document.getElementById("user2");
let user_time = document.getElementById("user3");
let principle = document.getElementById("principle");
let interest = document.getElementById("Interest");
let amount = document.getElementById("amount");

function calculate(){
    let sum = (user_amount.value * user_rate.value * user_time.value) / 100;
    amount.innerText = user_amount.value + sum;
}