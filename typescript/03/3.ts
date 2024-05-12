let x1: null = null;
let x2:undefined = undefined;
let x3: symbol = Symbol("markus"); // typeof x3 === ‘symbol'
console.log(x3.description);
let x4: bigint = 1n;
let x5: boolean = true;
let x6: number = 1;
let x7: string = 'abc';

const x8: string = 'abc';
// const 声明的类型是常数，不能被重新赋值
// x8 = 'bcd';
// 变量可以赋值
x7 = 'code';

// 子类型兼容，更具体的类型可以赋值给更抽象的类型
class MyString extends String{

}
let x9 = new MyString('abc');
let x10 = new String('bcd');
x10 = x9;

// 值类型可以赋值给对应的包装类型（类似于 java 的拆装箱）
let x11:Number = 1;
let x12: String = '2';
let x13: string = '3';
let x14 = x12.toString();

// 基本类型系统判断采用 typeof
let x15 = 1;
let numberType: boolean = typeof x15 === 'number';
console.log("typeof x15 === 'number' : ",numberType);
numberType = typeof x15 === 'boolean';
console.log("typeof x15 === 'number' : ",numberType);
// 对象类型系统判断采用 instanceof
let x16: Number = new Number(1);
console.log("x16 instanceof Number : ",x16 instanceof Number);