//2.1
// const keys = document.querySelectorAll('.key');
// const display_input = document.querySelector('.display .input');
// const display_output = document.querySelector('.display .output');

// let input = "";

// for (let key of keys) {
// 	const value = key.dataset.key;

// 	key.addEventListener('click', () => {
// 		if (value == "clear") {
// 			input = "";
// 			display_input.innerHTML = "";
// 			display_output.innerHTML = "";
// 		} else if (value == "backspace") {
// 			input = input.slice(0, -1);
// 			display_input.innerHTML = CleanInput(input);
// 		} else if (value == "=") {
// 			let result = eval(PerpareInput(input));

// 			display_output.innerHTML = CleanOutput(result);
// 		} else if (value == "brackets") {
// 			if (
// 				input.indexOf("(") == -1 || 
// 				input.indexOf("(") != -1 && 
// 				input.indexOf(")") != -1 && 
// 				input.lastIndexOf("(") < input.lastIndexOf(")")
// 			) {
// 				input += "(";
// 			} else if (
// 				input.indexOf("(") != -1 && 
// 				input.indexOf(")") == -1 || 
// 				input.indexOf("(") != -1 &&
// 				input.indexOf(")") != -1 &&
// 				input.lastIndexOf("(") > input.lastIndexOf(")")
// 			) {
// 				input += ")";
// 			}

// 			display_input.innerHTML = CleanInput(input);
// 		} else {
// 			if (ValidateInput(value)) {
// 				input += value;
// 				display_input.innerHTML = CleanInput(input);
// 			}
// 		}
// 	})
// }

// function CleanInput(input) {
// 	let input_array = input.split("");
// 	let input_array_length = input_array.length;

// 	for (let i = 0; i < input_array_length; i++) {
// 		if (input_array[i] == "*") {
// 			input_array[i] = ` <span class="operator">x</span> `;
// 		} else if (input_array[i] == "/") {
// 			input_array[i] = ` <span class="operator">÷</span> `;
// 		} else if (input_array[i] == "+") {
// 			input_array[i] = ` <span class="operator">+</span> `;
// 		} else if (input_array[i] == "-") {
// 			input_array[i] = ` <span class="operator">-</span> `;
// 		} else if (input_array[i] == "(") {
// 			input_array[i] = `<span class="brackets">(</span>`;
// 		} else if (input_array[i] == ")") {
// 			input_array[i] = `<span class="brackets">)</span>`;
// 		} else if (input_array[i] == "%") {
// 			input_array[i] = `<span class="percent">%</span>`;
// 		}
// 	}

// 	return input_array.join("");
// }

// function CleanOutput (output) {
// 	let output_string = output.toString();
// 	let decimal = output_string.split(".")[1];
// 	output_string = output_string.split(".")[0];

// 	let output_array = output_string.split("");
	
// 	if (output_array.length > 3) {
// 		for (let i = output_array.length - 3; i > 0; i -= 3) {
// 			output_array.splice(i, 0, ",");
// 		}
// 	}

// 	if (decimal) {
// 		output_array.push(".");
// 		output_array.push(decimal);
// 	}

// 	return output_array.join("");
// }

// function ValidateInput (value) {
// 	let last_input = input.slice(-1);
// 	let operators = ["+", "-", "*", "/"];

// 	if (value == "." && last_input == ".") {
// 		return false;
// 	}

// 	if (operators.includes(value)) {
// 		if (operators.includes(last_input)) {
// 			return false;
// 		} else {
// 			return true;
// 		}
// 	}

// 	return true;
// }

// function PerpareInput (input) {
// 	let input_array = input.split("");

// 	for (let i = 0; i < input_array.length; i++) {
// 		if (input_array[i] == "%") {
// 			input_array[i] = "/100";
// 		}
// 	}

// 	return input_array.join("");
// }
// 2.2
// const randomNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;

// function checkGuess() {
//  const guess = parseInt(document.getElementById("guess").value);
//  const messageElement = document.getElementById("message");
//  const attemptsElement = document.getElementById("attempts");

// if (isNaN(guess) || guess < 1 || guess > 100) {
//       messageElement.textContent = "შეიყვანეთ რიცხვი 1-100-მდე";
//       return;
//     }

//     attempts++;

//     if (guess === randomNumber) {
//        messageElement.textContent = `გილოცავ! შენ გამოიცანი რიცხვი ${attempts} ცდაში.`;
//        document.getElementById("guess").setAttribute("disabled", "true");
//     } else if (guess < randomNumber) {
//         messageElement.textContent = "ამაზე მაღალი რიცხვი ცადეთ.";
//     } else {
//         messageElement.textContent = "ამაზე დაბალი რიცხვი ცადეთ.";
//     }

//     attemptsElement.textContent = attempts;
// }
// 2.3
// const words = ["hangman", "javascript", "programming", "computer", "developer", "laptop", "phone"];
//         let word = words[Math.floor(Math.random() * words.length)];
//         let guessedWord = "_".repeat(word.length);
//         let incorrectGuesses = 0;

//         function updateWordDisplay() {
//             document.getElementById("word").textContent = guessedWord.split("").join(" ");
//         }

//         function checkLetter() {
//             const letter = document.getElementById("guess").value.toLowerCase();
//             if (!letter || letter.length !== 1 || !letter.match(/[a-z]/i)) {
//                 alert("გთხოვთ შეიყვანეთ ერთი ასო.");
//                 return;
//             }

//             if (word.includes(letter)) {
//                 for (let i = 0; i < word.length; i++) {
//                     if (word[i] === letter) {
//                         guessedWord = guessedWord.substring(0, i) + letter + guessedWord.substring(i + 1);
//                     }
//                 }
//             } else {
//                 incorrectGuesses++;
//                 document.getElementById("incorrect").textContent = incorrectGuesses;
//             }

//             updateWordDisplay();

//             if (guessedWord === word) {
//                 alert("შენ გამოიცანი სიტყვა.");
//             } else if (incorrectGuesses === 6) {
//                 alert("ცდები გამოგელიათ. სიტყვა იყო: " + word);
//             }
//         }

//         updateWordDisplay();
// 2.5
const users = [
  [333323, 999],
  [654321, 500]
];

function checkBalance() {
  const accountNumber = prompt("შეიყვანეთ თქვენი ანგარიშის ნომერი:");
  const user = users.find(u => u[0] === parseInt(accountNumber));
  if (user) {
      document.getElementById("balance").textContent = `თქვენი ბალანსი არის: $${user[1]}`;
  } else {
      alert("ანგარიშის ნომერი ვერ მოიძებნა.");
  }
}

function deposit() {
  const accountNumber = prompt("შეიყვანეთ ანგარიშის ნომერი:");
  const user = users.find(u => u[0] === parseInt(accountNumber));
  if (user) {
      const amount = parseFloat(prompt("შეიყვანეთ თანხა შესატანად:"));
      if (!isNaN(amount) && amount > 0) {
          user[1] += amount;
          document.getElementById("balance").textContent = `
          ანაბარი წარმატებულია. თქვენი ბალანსი არის: $${user[1]}`;
      } else {
          alert("არასწორი თანხა.");
      }
  } else {
      alert("ანგარიშის ნომერი ვერ მოიძებნა.");
  }
}

function withdraw() {
  const accountNumber = prompt("შეიყვანეთ თქვენი ანგარიშის ნომერი:");
  const user = users.find(u => u[0] === parseInt(accountNumber));
  if (user) {
      const amount = parseFloat(prompt("შეიყვანეთ თანხა გასატანად:"));
      if (!isNaN(amount) && amount > 0 && amount <= user[1]) {
          user[1] -= amount;
          document.getElementById("balance").textContent = `გატანა წარმატებულია. თქვენი ბალანსი არის: $${user[1]}`;
      } else {
          alert("არასწორი თანხა ან არასაკმარისი ბალანსი.");
      }
  } else {
      alert("ანგარიშის ნომერი ვერ მოიძებნა.");
  }
}