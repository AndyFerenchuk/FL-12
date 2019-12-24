let x1, x2;
let a = prompt("enter a");
a = parseFloat(a);
if (isNaN(a) || a === 0) {
    console.log('invalid input')
} else {
    let b = prompt("enter b");
    b = parseFloat(b);
    if (isNaN(b)) {
        console.log('invalid input')
    } else {
        let c = prompt("enter c");
        c = parseFloat(c);
        if (isNaN(c)) {
            console.log('invalid input')
        } else {
            let d = Math.pow(b, 2)  - 4 * a * c;
            console.log('d = ' + ' ' + d);
            if (d < 0) {
                console.log('no solution');
            } else {
                x1 = (-b + Math.sqrt(d)) / (2 * a);
                x2 = (-b - Math.sqrt(d)) / (2 * a);
                console.log('x1 = ' + ' ' + x1);
                console.log('x2 = ' + ' ' + x2);
            }
        }
    }
}