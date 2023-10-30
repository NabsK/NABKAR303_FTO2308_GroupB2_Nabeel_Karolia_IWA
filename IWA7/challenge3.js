const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const owed =
  "R" +
  (parseFloat(leoBalance * -1) + parseFloat(sarahBalance * -1)).toFixed(2);
const leo =
  leoName +
  " " +
  leoSurname +
  "\b\b\b" +
  "Owed " +
  "R " +
  parseFloat(leoBalance * -1);
const sarah =
  sarahName +
  "\b\b\b" +
  sarahSurname +
  " Owed " +
  "R " +
  parseFloat(sarahBalance * -1);
const total = "Total amount owed: ";
const result =
  leo +
  "\n" +
  sarah +
  "\n" +
  divider +
  "\n" +
  " " +
  total +
  " " +
  owed +
  "\n" +
  divider;

console.log(result);
