let a = + prompt('enter value of a');
let b = + prompt('enter value of b');
let c = + prompt('enter value of c');
if ((typeof a === "string" && a.length === 0 || typeof a === "undefined") || (typeof b === "string" && b.length === 0 || typeof b === "undefined") || (typeof c === "string" && c.length === 0 || typeof c === "undefined")) {
    alert('input values should be ONLY numbers');
} else if (Number(a.valueOf()) === 0 || Number(b.valueOf()) === 0 || Number(c.valueOf()) === 0) {
    alert('A triangle must have 3 sides with a positive definite length');
} else if ((a + b <= c) || (b + c <= a) || (c + a <= b)) {
    alert('‘Triangle doesn’t exist’');
    console.log('‘Triangle doesn’t exist’')
} else if (a === b && a === c) {
    console.log('‘Equilateral triangle’')
} else if ((a === b && a !== c) || (b === c && b !== a)) {
    console.log('‘Isosceles triangle’');
} else if (a !== b && a !== c && b !== c) {
    console.log('‘Scalene triangle’');
}