
//Check for valid value. Inform user if value incorrect and throw some message. Vertes per kableli.
//Change to let where appropriate
//Add leading values

//Get Button element and assign function to it when clicked
document.getElementById("convert").onclick = calculateHex;

function calculateHex() {
    var hexValue = "";

    var rgbValue = document.getElementById("rgbValue").value;
    const values = rgbValue.split(",");

    for (var i = 0; i < values.length; i++) {

        //Take first value, its whole division by 16 and find hex for it.
        var first = parseInt((values[i] / 16), 10);
        if (first < 10) {
            hexValue += first;
        } else {
            hexValue += findHexLetter(first);
        }

        //Check if there is division by 16 reminder, and find hex for it.
        var second = values[i] % 16;
        if (second !== 0) {
            if (second < 10) {
                hexValue += second;
            } else {
                hexValue += findHexLetter(second);
            }
        }
    }

    document.getElementById("result").innerText = "Hex value is: " + hexValue;
    console.log(hexValue);

}

function findHexLetter(hexValue) {
    if (hexValue < 10) {
        return hexValue
    } else if (hexValue === 10) {
        return "A";
    } else if (hexValue === 11) {
        return "B";
    } else if (hexValue === 12) {
        return "C";
    } else if (hexValue === 13) {
        return "D";
    } else if (hexValue === 14) {
        return "E";
    } else if (hexValue === 15) {
        return "F";
    } else {
        console.log("Incorrect value was, please check your code");
        return "";
    }
}

