function calc(event) {
    let num1 = parseInt(document.getElementById("n1").value);
    let num2 = parseInt(document.getElementById("n2").value);
    let result;

    switch (event) {
        case 'sum':
            result = calculator.sum(num1, num2);
            break;
        case 'sub':
            result = calculator.sub(num1, num2);
            break;
        case 'div':
            result = calculator.div(num1, num2);
            if (result === 0) {
                alert("На ноль делить нельзя");
                return;
            }
            break;
        case 'mult':
            result = calculator.mult(num1, num2);
            break;
        default:
            break;
    }
    document.getElementById('result').innerHTML = result;
}

class calculator {
    static sum(num1, num2) {
        return num1 + num2;
    }
    static sub(num1, num2) {
        return num1 - num2;
    }
    static mult(num1, num2) {
        return num1 * num2;
    }
    static div(num1, num2) {
        if (num2 === 0) return 0;
        return num1 / num2;
    }
}