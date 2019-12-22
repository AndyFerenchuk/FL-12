let x1, x2;
let a = prompt("enter a",);
a = parseFloat(a);
if (typeof a !== "number" || a === 0) {
    console.log('invalid input')
} else {
    let b = prompt("enter b",);
    b = parseFloat(b);
    if (typeof b !== "number") {
        console.log('invalid input')
    } else {
        let c = prompt("enter c",);
        c = parseFloat(c);
        if (typeof c !== "number") {
            console.log('invalid input')
        } else {
            let d = b ** 2 - 4 * a * c;
            console.log('d = ' + ' ' + d);
            if (d < 0) {
                console.log('no solution');
            } else {
                x1 = (-b + d ** (1 / 2)) / (2 * a);
                x2 = (-b - d ** (1 / 2)) / (2 * a);
                console.log('x1 = ' + ' ' + x1);
                console.log('x2 = ' + ' ' + x2);
            }
        }
    }
}

