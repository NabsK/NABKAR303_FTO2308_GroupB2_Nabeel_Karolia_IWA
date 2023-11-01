const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const owed = (-leoBalance + -sarahBalance).toFixed(2);
const leo = `\n${leoName} ${leoSurname.trim()} (Owed: R ${(-leoBalance).toFixed(
  2
)})\n`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${(-sarahBalance).toFixed(
  2
)}) \n`;

const total = `  Total amount owed: R ${
  owed.slice(0, 2) + " " + owed.slice(2)
}\n`;

const result = leo + sarah + divider + "\n" + total + divider;
console.log(result);
