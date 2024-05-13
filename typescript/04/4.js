// 联合
var a1 = 1;
// 交叉
var a2 = 1;
var a3;
var a4 = '123';
// TypeScript 类型系统
var x = {
    id: 123456,
    name: 'markus',
    age: 25
};
// 对象类型
var aa = {
    id: 123456,
    name: 'markus',
    age: 25
};
var MyClass2 = /** @class */ (function () {
    function MyClass2() {
    }
    return MyClass2;
}());
// 三种声明方式均可
var bb = new MyClass2;
var cc = new MyClass2;
var dd = new MyClass2;
// 接口可列举特性
for (var key in x) {
    console.log(key);
}
console.log(new Function instanceof Object);
console.log(typeof MyClass2);
