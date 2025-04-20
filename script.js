function calculateBill() {
    let unit = document.getElementById("unitInput").value.trim();
    if (unit === "" || isNaN(unit) || unit < 0) {
        document.getElementById("result").innerText = "Please enter a valid number of units.";
        return;
    }
    unit = Number(unit);
    let amount = 0;

    if (unit > 700) {
        amount += (unit - 700) * 45;
        unit = 700;
    }
    if (unit > 600) {
        amount += (unit - 600) * 44;
        unit = 600;
    }
    if (unit > 500) {
        amount += (unit - 500) * 43;
        unit = 500;
    }
    if (unit > 400) {
        amount += (unit - 400) * 43;
        unit = 400;
    }
    if (unit > 300) {
        amount += (unit - 300) * 42;
        unit = 300;
    }
    if (unit > 200) {
        amount += (unit - 200) * 41;
        unit = 200;
    }
    if (unit > 100) {
        amount += (unit - 100) * 39;
        unit = 100;
    }
    amount += unit * 39;

    document.getElementById("result").innerText = "Total Bill Amount: PKR " + amount;
}
