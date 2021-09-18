//Get Button element and assign function to it when clicked
document.getElementById("convert").onclick = calculateHex;

function calculateHex() {
    let hexValue = "";
    const ERROR_MESSAGE_LENGTH = "Incorrect value was entered. There should be 3 values separated by comma"
    const ERROR_MESSAGE_RANGE = "Incorrect value was entered. Values should range from 0 to 255 inclusive"

    //Get value entered by user and split it
    let rgbValue = document.getElementById("rgbValue").value;
    const VALUES = rgbValue.split(",");

    //Get placeholder for where result will be stored
    let resultValue = document.getElementById("result");

    //Check for issues --- Input should contain 3 values separated by comma
    if (VALUES.length != 3) {
        console.error(ERROR_MESSAGE_LENGTH);
        resultValue.innerText = ERROR_MESSAGE_LENGTH;
        return;
    }


    //Check for issues -- There should be only digits. 
    //Numbers should be whole
    //Each input should contain numbers 0-225

    for (let i in VALUES) {

        if (isNaN(VALUES[i]) || VALUES[i] % 1 !=0 || VALUES[i] < 0 || VALUES[i] > 255 ) {
            console.error(ERROR_MESSAGE_RANGE);
            resultValue.innerText = ERROR_MESSAGE_RANGE;
            return;
        }
    }


    //Start Calculating hex value
    for (let i in VALUES) {
        //Take value, its whole division by 16 and find hex for it.
        let first = parseInt((VALUES[i] / 16), 10);
        if (first < 10) {
            hexValue += first;
        } else {
            hexValue += findHexLetter(first);
        }

        //Check if there is division by 16 reminder, and find hex for it.
        let second = VALUES[i] % 16;
        if (second !== 0) {
            if (second < 10) {
                hexValue += second;
            } else {
                hexValue += findHexLetter(second);
            }
        } else {
            hexValue += "0";
        }
    }

    resultValue.innerText = hexValue;
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
        console.error("Incorrect value was, please check your code");
        return "";
    }
}

