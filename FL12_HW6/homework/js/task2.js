const a = Number(prompt("enter value of a")),
    b = Number(prompt("enter value of b")),
    c = Number(prompt("enter value of c")),
    o = 0;
if (typeof a === "string" && a.length === o || typeof a === "undefined") {
    alert("input values should be ONLY numbers");
} else if (typeof b === "string" && b.length === o || typeof b === "undefined") {
    alert("input values should be ONLY numbers");
} else if (typeof c === "string" && c.length === o || typeof c === "undefined") {
    alert("input values should be ONLY numbers");
} else if (a.valueOf() === o || b.valueOf() === o || c.valueOf() === o) {
    alert("A triangle must have 3 sides with a positive definite length");
} else if (a + b <= c || b + c <= a || c + a <= b) {
    alert("‘Triangle doesn’t exist’");
    console.log("‘Triangle doesn’t exist’");
} else if (a === b && a === c) {
    console.log("‘Equilateral triangle’");
} else if (a === b && a !== c || b === c && b !== a) {
    console.log("‘Isosceles triangle’");
} else if (a !== b && a !== c && b !== c) {
    console.log("‘Scalene triangle’");
}
