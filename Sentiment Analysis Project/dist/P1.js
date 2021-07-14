var CharCount = /** @class */ (function () {
    function CharCount(x) {
        this.arr = {};
        this.x = x;
    }
    CharCount.prototype.Display = function () {
        for (var i = 0; i < this.x.length; i++) {
            this.arr[this.x.charAt(i)] = 0;
        }
        for (var i_1 = 0; i_1 < this.x.length; i_1++) {
            var c_1 = this.x.charAt(i_1);
            var counts = this.arr[c_1];
            this.arr[c_1] = counts > 0 ? counts + 1 : 1;
        }
        console.log(this.arr);
    };
    return CharCount;
}());
var c = new CharCount("My name is faizan alam");
c.Display();
