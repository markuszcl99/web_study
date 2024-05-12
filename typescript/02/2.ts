// 基本语法
let x: string = '123456';

let x1: number = 1;
let x2: number;

// 断言语法
let x3 = 1 as number;
let x4 = foo("1",false) as any;

// 可以声明类型的语法
var y1: boolean = true;
let y2: number = 1;
const y3: number = 1;
function foo(s: string,b:boolean): number{
    return 1;
}
class MyClass {
    foo(): number{
        return 1;
    }
}
for(let idx:number = 0; idx<10;idx++){
    console.log(idx);
}

try{

}catch(e: any){ // e 只能声明为 any unknown

}

// 类型推断()
const z1 = 1; // 字面量类型
let z2 = 1 as const;

console.log(x)