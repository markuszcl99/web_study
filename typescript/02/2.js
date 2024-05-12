// 基本语法
var x = '123456';
var x1 = 1;
var x2;
// 断言语法
var x3 = 1;
// 可以声明类型的语法
var y1 = true;
var y2 = 1;
var y3 = 1;
function foo(s, b) {
    return 1;
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.foo = function () {
        return 1;
    };
    return MyClass;
}());
for (var idx = 0; idx < 10; idx++) {
    console.log(idx);
}
console.log(x);
