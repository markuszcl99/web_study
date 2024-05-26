// 类型守护 & 类型收窄

// 类型收窄 和 交叉一致

let s1!: string;
let s2!: number | string;

s2 = 'a';
s1 = s2;

// js 执行流 中会进行类型收窄
// 可以发生类型收窄的关键字
// instanceof
// in
// ++ &&
if (typeof s2 === 'string') {
    // 这里就出现了类型收窄
    console.log(s2);
}

switch (typeof s2) {
    case 'string':
        console.log(s2);
        break;
    case 'number':
        console.log(s2);
}

class A {

}

let o1!: any;
let o2!: Object;

if (o2 instanceof A) {
    console.log(o2);
}

let o3 = {
    a: 1,
    b: 2
}
if ('k' in o3) {
    // 收窄的计算过程
    console.log(o3);
}

// 谓词签名
function X(a: any): a is A{
    return true;
}
if(X(o1)){ // 返回 true
    console.log(o1);
}

// 断言签名
function Y(a: any): asserts a is number{
    if(typeof a !== 'number'){
        throw new Error("error");
    }
}

s2 = 'a';
Y(s2); // 断言通过
s1 = s2;

// 可辨识联合类型 被辨识的成员值一定是唯一的 