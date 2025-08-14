var Box = /** @class */ (function () {
    function Box(value) {
        this.value = value;
    }
    Box.prototype.getValue = function () {
        return this.value;
    };
    return Box;
}());
var numberBox = new Box(123);
console.log(numberBox.getValue());
var stringBox = new Box("Hello");
console.log(stringBox.getValue());
var dateBox = new Box(new Date());
console.log(dateBox.getValue());
