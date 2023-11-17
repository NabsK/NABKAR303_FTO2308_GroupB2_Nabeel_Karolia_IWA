firstName = "John";
age = 35;
hobby = "Coding";

const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};

function hobbyMessage() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

hobbyMessage();
