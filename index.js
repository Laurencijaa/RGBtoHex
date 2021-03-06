//Get Button element and assign function to it when clicked
document.getElementById("convert").onclick = calculateHex;

function calculateHex() {
    let hexValue = "";
    const ERROR_MESSAGE_LENGTH = "Incorrect value was entered. There should be 3 values separated by comma."
    const ERROR_MESSAGE_RANGE = "Incorrect value was entered. Values should range from 0 to 255 inclusive."

    //Get value entered by user and split it
    let rgbValue = document.getElementById("rgbValue").value;
    const VALUES = rgbValue.split(",");

    //Get placeholder for result
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

        if (isNaN(VALUES[i]) || VALUES[i] % 1 != 0 || VALUES[i] < 0 || VALUES[i] > 255) {
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

    switch (hexValue) {
        case 10: return "A";
        case 11: return "B";
        case 12: return "C";
        case 13: return "D";
        case 14: return "E";
        case 15: return "F";
        default: {
            console.error("Incorrect value was entered, please check your code");
            return "";
        }
    }
}

