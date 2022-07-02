// 1. Скрипт запрашивает ввести букву русского алфавита. Скрипт должен вывести сообщение какая эта буква - гласная или согласная - 10 баллов

const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];

const consonants = ["б", "в", "г", "д", "ж", "з", "й", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ"];

const askRusLetter = prompt("Введите одну русскую букву");


for (letter1 of vowels) {
  if (askRusLetter.toLowerCase() == letter1) {    // С помощью встроенного метода 
    console.log("Это гласная буква");
  } 
}

for (let i = 0; i < consonants.length; i++) {
   if (askRusLetter.toLowerCase() == consonants[i]) {   
    console.log("Это согласная буква");
   }
}




// 2. “Калькулятор” - пользователь вводит с клавиатуры число, символ арифметического действия (+, -, *, /) и еще одно число, Скрипт должен вывести результат  - 10


const firstNumber = +prompt("Введите первую цифру");
const arithMetic = prompt("Введите математический символ");
const secondNumber = +prompt("Введите вторую цифру");

function calculating () {

  if (arithMetic == "+") {
    return firstNumber + secondNumber;
  }else if (arithMetic == "-") {
    return firstNumber - secondNumber;
  }else if (arithMetic == "*") {
    return firstNumber * secondNumber;
  }else if (arithMetic == "/") {
    return firstNumber / secondNumber;
  }else {
    alert("ops");
  }
}

console.log(`Result: ${calculating()}`);





// 3. Вывести в консоль все возможные сочетания из двух цифр - первая цифра может быть любой от 3 до 8, вторая любой от 0 до 7. Пример: 36, 44, 80 и т.д


function getRandomNum (min, max) {
 let num = Math.ceil(Math.random() * (max - min) + min);

 return num;
}



function getRandomNum2 (min, max) {
  let num = Math.ceil(Math.random() * (max - min) + min);
 
  return num;
 }


 console.log(getRandomNum(3, 8) + getRandomNum2(0, 7));
 
 
 

