// Global scope
var a = "I am var (global)";
let b = "I am let (global)";
const c = "I am const (global)";

console.log("Global Scope:");
console.log(a);
console.log(b);
console.log(c);

function testScope() {
    var a = "I am var (function scope)";
    let b = "I am let (block scope)";
    const c = "I am const (block scope)";

    console.log("\nInside Function:");
    console.log(a); // function-scoped var
    console.log(b); // block-scoped let
    console.log(c); // block-scoped const

    if (true) {
        var a = "I am var (still function scope inside block)";
        let b = "I am let (new block scope inside if)";
        const c = "I am const (new block scope inside if)";

        console.log("\nInside IF Block:");
        console.log(a); 
        console.log(b);
        console.log(c);
    }

    console.log("\nAfter IF Block inside function:");
    console.log(a); // var got overwritten
    console.log(b); // still function's let
    console.log(c); // still function's const
}

testScope();
