// 枚举类型的用法
// 1. 枚举成员的名字不能是数值类型
// 2. 枚举值只能是 数字类型 or 字符串类型
// 常规枚举
enum X {
    a, // 默认值从 0 开始
    b,
}

type T = X; // 别名
console.log(X);
let n = 1;
console.log(X.a);
console.log(X[n]);

// 枚举值可以为 常量值 or 计算值
// 常量值就是编译器就确定的，计算值是通过运行时计算的
// 枚举成员声明方式
// 1. ["member"]
// 2. "member"
// 3. member (above 常量值)
// 4. member = enum value
enum X1{
    ["a"],
    "b",
    c,
    d = 5,
    e,
    f,
    g = 10,
    h, // 常量值，默认为 上一位成员类型数值 + 1，但要记住，上一个数值枚举需要挨着
    i = 2+2,
    j,
    k = 'a',
    l = Number(1), // 计算值，即运行时计算出来的结果（除此之外，其余声明的值均为常量值）
}
console.log(X1);


// 拿到枚举的所有成员
type T1 = keyof typeof X1;
const a: T1 = 'a';

type V = `${X1}`;

// 遍历成员
let members: string[] = Object.keys(X1);
console.log("start for-each X1")
members.forEach(member => {
    console.log(member);
})

// 常量枚举