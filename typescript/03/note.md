## TypeScript 中最基础的类型系统

![](https://img.markuszhang.com/img/20240512173628.png)

## Symbol 简介和使用
在 TypeScript 中，Symbol 是一种基本数据类型，它表示唯一标识符。Symbol 的作用主要体现在以下几个方面：

- 创建唯一标识符：每个 Symbol 值都是唯一的，即使创建多个相同描述的 Symbol，它们也是不相等的。这使得 Symbol 可以用于创建对象的私有属性或者唯一的属性键值。

- 作为对象属性的键：由于 Symbol 的唯一性，它可以用作对象属性的键值，从而防止键名冲突。这对于定义对象的私有属性或者内部属性非常有用，因为 Symbol 属性不会被意外地访问到。

- 用于定义对象的方法：可以将 Symbol 用作对象的方法名，这样可以确保方法名的唯一性，不会与其他方法名冲突。

- 作为常量：可以使用 Symbol 来定义一些常量，因为每个 Symbol 都是唯一的，所以可以确保常量的唯一性。

下面是一个示例，演示了如何在 TypeScript 中使用 Symbol：
```ts
// 创建一个 Symbol
const mySymbol = Symbol("description");

// 使用 Symbol 作为对象属性的键
const myObject = {
    [mySymbol]: "value"
};

console.log(myObject[mySymbol]); // 输出: "value"

// 定义一个 Symbol 作为方法名
const myMethod = Symbol("myMethod");
const objWithMethod = {
    [myMethod]: function() {
        console.log("This is a method");
    }
};

objWithMethod[myMethod](); // 输出: "This is a method"

// 使用 Symbol 定义常量
const MY_CONST = Symbol("MY_CONST");

```
总的来说，TypeScript 中的 Symbol 主要用于创建唯一标识符，用于避免属性名冲突、定义私有属性或方法等场景。