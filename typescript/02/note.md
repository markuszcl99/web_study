## 1、什么是类型标注

基本语法：
- name: type = value
- name: type

断言语法:
- expression as type
- value as type

```TypeScript
let x: string = '123456';
```

## 2、类型标注与使用
- 有名字的地方，就可以标注类型
- 有表达式的地方，可以使用类型断言

### 2.1、有哪些 JavaScript 语句或语法能“声明”一个名字

```TypeScript
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
```
### 2.2、什么是 JavaScript 中的表达式
JavaScript 中的表达式是一组代码，它可以计算出来一个值。表达式可以包含变量、运算符、函数调用、字面量等元素，通过对这些元素进行组合和操作，表达式最终会得出一个值。
### 2.3、类型标注的原则
- 方法签名一定要标注
- 能不标注的地方就不用标注，依赖类型推断去得到结果
- 能用 const 的地方，就尽量用 const（const 类型更精准）
- 能使用 as const 的地方，就尽量用 as const
- 能不用 as 的地方，就不用 as
## 3、总结