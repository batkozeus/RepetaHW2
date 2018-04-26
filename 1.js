// Task 1

const passwords = ["qwerty", "111qwe", "123123", "r4nd0mp4zzw0rd"];
const passDisplay = document.querySelector("#passDisplay");
passDisplay.innerHTML = `Пароли: ${passwords.join(' ')}`;
const passAllowance = document.querySelector("#passAllowance");

let checkPassword = true;
let passwordAttempts = 3;
let correctnessOfAnswer = false;

do {
  let userPassword = prompt("Введите пароль");
  let checkedUserPassword = userPassword !== "" && userPassword !== null;

  if (checkedUserPassword) {
    for (const pass of passwords) {
      if (pass === userPassword) {
        alert('Добро пожаловать!');
        checkPassword = false;
        correctnessOfAnswer = true;
        break;
      }
    }
    passwordAttempts--;
    if (!correctnessOfAnswer) {
        if (passwordAttempts > 0) {
            alert(`Неверный пароль, у вас осталось ${passwordAttempts} попыток`);
        }
        else {
            alert('У вас закончились попытки, аккаунт заблокирован!');
            checkPassword = false;
        }
      
    }
  } else {
    checkPassword = false;
  }
} while (checkPassword);

correctnessOfAnswer == true
  ? (passAllowance.innerHTML = "Добро пожаловать!")
  : (passAllowance.innerHTML =
      "У вас закончились попытки, аккаунт заблокирован!");