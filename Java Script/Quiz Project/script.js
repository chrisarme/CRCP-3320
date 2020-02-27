function addition()
{
    let var1 = document.getElementById("value1");
    let var2 = document.getElementById("value2");
    let var3 = document.getElementById("value3");
    let pDiv = document.getElementById("pDiv");

    zeroVals(var1, var2, var3);

    let answer = parseInt(var1.value) + parseInt(var2.value) + parseInt(var3.value);
    let pAnswer = document.createElement("p");
    pAnswer.innerHTML = "Addition Result: " + var1.value + " + " + var2.value + " + " + var3.value + " = " + answer;
    pDiv.appendChild(pAnswer);
}

function subtraction()
{
    let var1 = document.getElementById("value1");
    let var2 = document.getElementById("value2");
    let var3 = document.getElementById("value3");
    let pDiv = document.getElementById("pDiv");

    zeroVals(var1, var2, var3);

    let answer = parseInt(var1.value) - parseInt(var2.value) - parseInt(var3.value);
    let pAnswer = document.createElement("p");
    pAnswer.innerHTML = "Subraction Result: " + var1.value + " - " + var2.value + " - " + var3.value + " = " + answer;
    pDiv.appendChild(pAnswer);
}


function multiplication()
{
    let var1 = document.getElementById("value1");
    let var2 = document.getElementById("value2");
    let var3 = document.getElementById("value3");
    let pDiv = document.getElementById("pDiv");

    zeroVals(var1, var2, var3);

    let answer = parseInt(var1.value) * parseInt(var2.value) * parseInt(var3.value);
    let pAnswer = document.createElement("p");
    pAnswer.innerHTML = "Multiplication Result: " + var1.value + " x " + var2.value + " x " + var3.value + " = " + answer;
    pDiv.appendChild(pAnswer);
}

function division()
{
    let var1 = document.getElementById("value1");
    let var2 = document.getElementById("value2");
    let var3 = document.getElementById("value3");
    let pDiv = document.getElementById("pDiv");

    zeroVals(var1, var2, var3);
    let pAnswer = document.createElement("p");

    if (var2.value == 0 || var3.value == 0)
    {
        pAnswer.innerHTML = "Division Result: " + var1.value + " / " + var2.value + " / " + var3.value + " = " + "CANNOT DIVIDE BY 0";
    }
    else
    {
        let answer = parseInt(var1.value) / parseInt(var2.value) / parseInt(var3.value);
        pAnswer.innerHTML = "Division Result: " + var1.value + " / " + var2.value + " / " + var3.value + " = " + answer;
    }

    pDiv.appendChild(pAnswer);
}

function zeroVals(var1, var2, var3)
{
    if (var1.value == "")
    {
        var1.value = 0;
    }

    if (var2.value == "")
    {
        var2.value = 0;
    }

    if (var3.value == "")
    {
        var3.value = 0;
    }
}

function clearPDiv()
{
    // why can't this be called clear()? Already a javascript function that is called clear()
    let pDiv = document.getElementById("pDiv");
    pDiv.innerHTML = "";

    while (pDiv.firstChild)
    {
        pDiv.removeChild(pDiv.firstChild);
    }
}
