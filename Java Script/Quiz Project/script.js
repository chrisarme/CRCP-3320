function addition()
{
    let var1 = document.getElementById("value1");
    let var2 = document.getElementById("value2");
    let var3 = document.getElementById("value3");
    let pDiv = document.getElementById("pDiv");

    let answer = var1.value + var2.value + var3.value;
    let pAnswer = document.createElement("p");
    pAnswer.innerHTML = "Addition Result: " + var1 + " + " + var2 + " + " + var3 + " = " + answer;
    pDiv.appendChild(pAnswer);
}
