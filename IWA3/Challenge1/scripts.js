import { company, year } from "/Challenge1/configuration.js";

const message = "© " + company + " (" + year + ")";
document.querySelector("footer").innerText = message;
