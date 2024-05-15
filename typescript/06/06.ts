// 常见的类型声明方式
// 类类型
class MyClass {
    id: number;
    name: string;
    age: number;

    constructor(id: number,name:string,age:number){
        this.id = id;
        this.name = name;
        this.age = age;
    }
}

// 接口类型
interface IMyClass {
    id: number;
    name: string;
    age: number;
}

// 对象类型
type T = {
    id: number;
    name: string;
    age: number;
}

// 对象字面量类型
let x = {
    id: 1,
    name: "markus",
    age: 25
}
type TT = typeof x;

// 方法重载使用
class MyOverLoad {
    foo(s: string): void;
    foo(b: boolean,n: number): number;
    // 实现签名 最常用的方式
    foo(...args: any[]): any{
        if(args.length == 2){
            if(args[0]){
                return args[1]+2;
            } else {
                return args[1]-1;
            }
        } else if(args.length == 1 && typeof args[0] === 'string') {
            return "foo return "+args[0]
        }
    }
}
let x1 = new MyOverLoad();
console.log(x1.foo(true,10));
console.log(x1.foo(false,10));
console.log(x1.foo("hello overload!"));

// 可选参数特性
interface IOptionParam{
    id: number;
    name: string;
    iphone?: string; // 可选属性
    readonly age: number; // 只读属性
}

class OptionParamImpl implements IOptionParam{
    id: number;
    name: string;
    iphone?: string;
    age: number;
    constructor(id:number,name: string,age: number);
    constructor(id:number,name: string,iphone: string,age: number);
    constructor(...args: any[]){
        if(args.length == 3){
            this.id = args[0];
            this.name = args[1];
            this.age = args[2]
        } else {
            this.id = args[0];
            this.name = args[1];
            this.iphone = args[2];
            this.age = args[3]
        }
    }
}

let x2 = new OptionParamImpl(1,"markus",25);
console.log('iphone' in x2);

let x3 = new OptionParamImpl(1,"markus","123456",25);
console.log('iphone' in x3);

// 接口就是行为的描述
let x4:IOptionParam = {
    id: 123,
    name: "markus",
    age: 25
}
x4.id = 456;
// 编译不通过，因为是只读属性
// x4.age = 18;

// 可选参数放在函数参数里时，只能放在最后一位
function foo(id:number,age:number,...args:any[]){
    console.log(id+":"+age);
    args.forEach(item => {
        console.log(item);
    });
}
foo(1,25,123,346);

// 缺省参数
function foo1(x : number=10){
    console.log("foo ==> "+x);
}
foo1();
foo1(20);
// 这里有几条注意的点：
// 1. 缺省参数和可选参数不能是同一个参数
// function foo1(x? : number =10){

// }
// 2. 参数初始化器不能写在类型声明上
// type TTT = (x: number=10) => void;
type TTT = (x:string) => void;