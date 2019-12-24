let a = prompt("enter a");
a = parseFloat(a);
const four = 4,
    two = 2,
    zero = 0;
if (isNaN(a) || a === zero) {
    console.log('invalid input');
}
else {
    let b = prompt("enter b");
    b = parseFloat(b);
    if (isNaN(b)) {
        console.log('invalid input');
    } else {
        let c = prompt("enter c");
        c = parseFloat(c);
        if (isNaN(c)) {
            console.log('invalid input');
        } else {
            const d = Math.pow(b, two) - four * a * c;
            console.log('d = ', d);
            if (d < zero) {
                console.log('no solution');
            } else {
                const x1 = (-b + Math.sqrt(d)) / (two * a),
                    x2 = (-b - Math.sqrt(d)) / (two * a);
                console.log('x1 = ', x1);
                console.log('x2 = ', x2);
            }
        }
    }
}
