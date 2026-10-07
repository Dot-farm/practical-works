let balance=1000;
function deposit(user){
    if (user > 100000){
        alert("the amount is to large")
    }else{
        balance += user;
        alert("deposited "+ user + ", balance: " + balance)
    }
}

function withdraw(user){
    if (user >= balance){
        alert("Insufficent funds!")
    }else{
        balance -= user;
        alert("Withdrawal successfull")
    }
}

function Balance(){
    return balance;
}

console.log("======== Welcome to lockheed bank ========");
let correctPassword = "221099";
let attempts = 0;
let maxAttempts = 5;

while (attempts < maxAttempts) {

    let password = prompt("Enter your password:");

    if (password === correctPassword) {

    alert("1-deposit ")
    alert("2-withdraw")
    alert("3-balance")
    let chioce = Number(prompt("pick one service: "));
    if (chioce === 1){
        deposit(Number(prompt("how much do u want to deposit")))
    }
    else if(chioce === 2 ){
        withdraw(Number(prompt("how much do u want to withdraw")))
    }
    else if (chioce === 3){
        Balance()
    }
        break;

    } else {

        attempts++;
        alert("Wrong password!");
        alert("Attempts used: " + attempts);
    }
}

if (attempts === maxAttempts) {
    alert("Account locked!");
}