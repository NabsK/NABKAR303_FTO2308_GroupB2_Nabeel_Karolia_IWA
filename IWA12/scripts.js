const STATUS_MAP = {
  shelf: {
    color: "green",
    canReserve: true,
    canCheckout: true,
    canCheckIn: false,
  },
  reserved: {
    color: "blue",
    canReserve: false,
    canCheckout: true,
    canCheckIn: false,
  },
  overdue: {
    color: "red",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
  checkedOut: {
    color: "orange",
    canReserve: false,
    canCheckout: false,
    canCheckIn: true,
  },
};

// Edit below line

const status0 = document.querySelector("#book1 .status");
const reserve0 = document.querySelector("#book1 .reserve");
const checkout0 = document.querySelector("#book1 .checkout");
const checkin0 = document.querySelector("#book1 .checkin");

const status1 = document.querySelector("#book2 .status");
const reserve1 = document.querySelector("#book2 .reserve");
const checkout1 = document.querySelector("#book2 .checkout");
const checkin1 = document.querySelector("#book2 .checkin");

const status2 = document.querySelector("#book3 .status");
const reserve2 = document.querySelector("#book3 .reserve");
const checkout2 = document.querySelector("#book3 .checkout");
const checkin2 = document.querySelector("#book3 .checkin");

status0.style.color = STATUS_MAP.overdue.color;
reserve0.innerHTML = STATUS_MAP.overdue.canReserve
  ? "Reserve"
  : (reserve0.disabled = true);
checkout0.innerHTML = STATUS_MAP.overdue.canCheckout
  ? "Check out"
  : (checkout0.disabled = true);
checkin0.innerHTML = STATUS_MAP.overdue.canCheckIn
  ? "Check In"
  : (checkin0.disabled = true);
checkin0.style.color = null;

status1.style.color = STATUS_MAP.reserved.color;
reserve1.innerHTML = STATUS_MAP.reserved.canReserve
  ? "Reserve"
  : (reserve1.disabled = true);
checkout1.innerHTML = STATUS_MAP.reserved.canCheckout
  ? "Check out"
  : (checkout1.disabled = true);
checkin1.innerHTML = STATUS_MAP.reserved.canCheckIn
  ? "Check In"
  : (checkin1.disabled = true);
checkin1.style.color = null;

status2.style.color = STATUS_MAP.shelf.color;
reserve2.innerHTML = STATUS_MAP.shelf.canReserve
  ? "Reserve"
  : (reserve2.disabled = true);
checkout2.innerHTML = STATUS_MAP.shelf.canCheckout
  ? "Check out"
  : (checkout2.disabled = true);
checkin2.innerHTML = STATUS_MAP.shelf.canCheckIn
  ? "Check In"
  : (checkin2.disabled = true);
checkin2.style.color = null;
