const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING =
  "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

const location = "NAM";
let shipping = null;
let currency = "$";
customers = 1;

if (location === "RSA") {
  (shipping = 400), (currency = "R");
}

if (location === "NAM") {
  shipping = 600;
} else {
  shipping = 800;
}

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

if (shoes + batteries + pens + shirts > 1000 && location === ("RSA" || "NAM")) {
  if (location === "NAM" && customers < 2) {
    if (location === "RSA") {
      shipping = 0 || calcShipping;
    }
  }
}

if (shipping === 0 && customers != 1) {
  console.log(FREE_WARNING);
}

location === "NK"
  ? console.log(BANNED_WARNING)
  : console.log(
      "price",
      currency,
      shoes + batteries + pens + shirts + shipping
    );
