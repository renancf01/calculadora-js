function calcNum(num) {
    if (typeof gvisor == "undefined") {
        document.calcform.visor.value = '';
    }

    document.calcform.visor.value = document.calcform.visor.value + num;

    gvisor = 1;
}

function cleanCalc() {
    document.calcform.visor.value = '';
    delete gvisor;
    delete goper;
    delete gvalue;
}

function calcOper (oper, number1, number2) {
    if (oper == "plus") {
        var value = parseFloat(number1) + parseFloat(number2);
    } else {
        if (oper == "sub") {
            var value = number1 - number2;
        } else {
            if (oper == "multi") {
                var value = number1 * number2;
            } else {
                var value = number1 / number2;
            }
        }
    }

    return(value)
}

function calcParse(oper) {
    let value = document.calcform.visor.value;
    delete gvisor;

    if (typeof goper != "undefined" && oper == "result") {
        gvalue = calcOper(goper, gvalue, value);
        document.calcform.visor.value = gvalue;
        delete oper;
        delete gvalue;
        return(0)
    }

    if (typeof gvalue != "undefined") {
        gvalue = calcOper(goper, gvalue, value);
        goper = oper;
        document.calcform.visor.value = gvalue;
        return(0)
    } else {
        gvalue = value;
        goper = oper;
    }
}
