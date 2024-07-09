let num = prompt("1-99 arasi eded daxil edin");
function numMachine(myNum) {
    if (+myNum > 0 && +myNum < 100) {
        let firstNum = myNum.split("")[0]
        let secondNum = myNum.split("")[1]
        let numText;
        switch (firstNum) {
            case "1":
                numText = "bir"
                break;
            case "2":
                numText = "iki"
                break;
            case "3":
                numText = "uc"
                break;
            case "4":
                numText = "dord"
                break;
            case "5":
                numText = "bes"
                break;
            case "6":
                numText = "alti"
                break;
            case "7":
                numText = "yeddi"
                break;
            case "8":
                numText = "sekkiz"
                break;
            case "9":
                numText = "doqquz"
                break;

        }
        let numText2;
        switch (firstNum) {
            case "1":
                numText2 = "on"
                break;
            case "2":
                numText2 = "iyirmi"
                break;
            case "3":
                numText2 = "otuz"
                break;
            case "4":
                numText2 = "qirx"
                break;
            case "5":
                numText2 = "elli"
                break;
            case "6":
                numText2 = "altmis"
                break;
            case "7":
                numText2 = "yetmis"
                break;
            case "8":
                numText2 = "seksen"
                break;
            case "9":
                numText2 = "doxsan"
                break;
        }
        let numText3;
        switch (secondNum) {
            case "0":
                numText3 = "";
                break;
            case "1":
                numText3 = "bir"
                break;
            case "2":
                numText3 = "iki"
                break;
            case "3":
                numText3 = "uc"
                break;
            case "4":
                numText3 = "dord"
                break;
            case "5":
                numText3 = "bes"
                break;
            case "6":
                numText3 = "alti"
                break;
            case "7":
                numText3 = "yeddi"
                break;
            case "8":
                numText3 = "sekkiz"
                break;
            case "9":
                numText3 = "doqquz"
                break;

        }
        if (myNum.length == 1) {
            console.log(numText);
        } else if (firstNum == "0") {
            console.log(numText2);
        } else {
            console.log(numText2 + " " + numText3);
        }
    } else {
        console.log("Yanlis deyer");
    }
}
numMachine(num);