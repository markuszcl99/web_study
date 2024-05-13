
// 联合
let a1: number | string = 1;

// 交叉
let a2: number & 1 = 1;

let a3: number & string;

let a4: number | any = '123';

// TypeScript 类型系统
let x = {
    id: 123456,
    name: 'markus',
    age: 25
}

// 别名，两种常用称呼：1、字面量对象类型({...},{}) 2、匿名的接口类型
type User1 = {
    id: number;
    name: string;
    age: number;
}
// 接口类型
interface User2 {
    id: number;
    name: string;
    age: number;
}
// 对象类型
let aa: object = {
    id: 123456,
    name: 'markus',
    age: 25
}

class MyClass2 implements User2{
    id: number;
    name: string;
    age: number;
}

// 三种声明方式均可
let bb: User1 = new MyClass2;
let cc: User2 = new MyClass2;
let dd: MyClass2 = new MyClass2;

// 接口可列举特性
for(var key in x){
    console.log(key);
}

console.log(new Function instanceof Object)
console.log(typeof MyClass2);

// 接口联合与交叉
interface Bird {
    weight: number;
    leg: string;
    wings: number;
}

interface Horse {
    weight: string;
    leg: string;
    id: number;
}

type T = Bird | Horse;
// 手动计算 联合类型，这种方式等同于下面 Animal 表现
// type Animal = Omit<T,never>;

interface Animal {
    weight: number | string;
    leg: string;
}

interface Bird1 extends Animal {
    wings: number;
}
interface Horse1 extends Animal {
    id: number;
}

type T1 = Bird1 | Horse1;

// 接口联合时，成员也会做联合，例如 weight 声明为 Bird《number》 Horse《string》，来观察下面的 Animal1 的表现
type Animal1 = Omit<T1,never>;

// 接口交叉类似，但有一点不同的是，接口交叉是进行深度遍历运算的，现象可以观察下面的一段代码
type T2 = Bird1 & Horse1 & never;
type T3 = Bird1 & Horse1;
// 在看其内部成员的交叉表现，类型更具体
type T4 = Omit<T3,never>