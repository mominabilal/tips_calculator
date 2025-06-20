window.onload = () => {
    document.querySelector("#calculate").onclick = calculateTip;
    document.querySelector("#Reset").onclick = resetFields;
};

function calculateTip() { 
    const amount = parseFloat(document.getElementById("amount").value);
    const percentage = parseFloat(document.getElementById("percentage").value);
    const people = parseInt(document.getElementById("people").value);

    if (isNaN(amount) || isNaN(percentage) || isNaN(people) || amount <= 0 || percentage <= 0 || people <= 0) {
        alert("Please enter valid positive numbers in all fields.");
        return;
    }

    const tip = amount * (percentage / 100);
    const total = amount + tip;
    const totalPerPerson = total / people;

    document.getElementById("Tip").innerText = tip.toFixed(2);
    document.getElementById("Total").innerText = total.toFixed(2);
    document.getElementById("each").innerText = totalPerPerson.toFixed(2);

    document.querySelector(".tip").style.display = "block";
}

function resetFields() {
    document.getElementById("amount").value = "";
    document.getElementById("percentage").value = "";
    document.getElementById("people").value = "";
    document.querySelector(".tip").style.display = "none";
}