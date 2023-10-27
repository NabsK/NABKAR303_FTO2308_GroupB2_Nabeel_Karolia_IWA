const primaryPhone = "O748105141";
const secondaryPhone = "0219131568";

// Only change below this line

function containsOnlyNumbers(str) {
  return /^\d+$/.test(str);
}

console.log(
  "Primary phone is valid numerical string:",
  containsOnlyNumbers(primaryPhone)
);
console.log(
  "Primary phone is valid numerical string:",
  containsOnlyNumbers(secondaryPhone)
);
