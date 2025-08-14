class Util {

    getDate() {
        let today = new Date();
        let day = String(today.getDate()).padStart(2, '0');
        let month = String(today.getMonth() + 1).padStart(2, '0');
        let year = today.getFullYear();
        return `${day}-${month}-${year}`;
    }
    getPIValue() {
        return Math.PI;
    }

    convertC2F(celsius) {
        return (celsius * 9/5) + 32;
    }
    getFibonacci(n) {
        let fib = [0,1];
        for (let i = 2; i < n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
        }
        return fib;
    }
}

let util = new Util();

console.log("Today's Date:", util.getDate());
console.log("Value of PI:", util.getPIValue());
console.log("25°C in Fahrenheit:", util.convertC2F(25));
console.log("First 5 Fibonacci numbers:", util.getFibonacci(5));
