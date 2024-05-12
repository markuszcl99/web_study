var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x1 = null;
var x2 = undefined;
var x3 = Symbol("markus"); // typeof x3 === ‘symbol'
console.log(x3.description);
var x4 = 1n;
var x5 = true;
var x6 = 1;
var x7 = 'abc';
var x8 = 'abc';
// const 声明的类型是常数，不能被重新赋值
// x8 = 'bcd';
// 变量可以赋值
x7 = 'code';
// 子类型兼容，更具体的类型可以赋值给更抽象的类型
var MyString = /** @class */ (function (_super) {
    __extends(MyString, _super);
    function MyString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MyString;
}(String));
var x9 = new MyString('abc');
var x10 = new String('bcd');
x10 = x9;
// 值类型可以赋值给对应的包装类型（类似于 java 的拆装箱）
var x11 = 1;
var x12 = '2';
var x13 = '3';
var x14 = x12.toString();
// 基本类型系统判断采用 typeof
var x15 = 1;
var numberType = typeof x15 === 'number';
console.log("typeof x15 === 'number' : ", numberType);
numberType = typeof x15 === 'boolean';
console.log("typeof x15 === 'number' : ", numberType);
// 对象类型系统判断采用 instanceof
var x16 = new Number(1);
console.log("x16 instanceof Number : ", x16 instanceof Number);
