// 函数的重载
// 重载的本质就是多重签名
type Foo = {
    (n: number): void;
    (s: string): void;
}

// 利用 type 声明函数
let t1: Foo = (n: number | string) => {
    console.log(n);
    console.log(typeof n)
}
t1(1);
t1("markus");

// 利用 interface 声明函数
interface IFoo {
    (): void;
    (...args: any[]): any
}
let t2: IFoo = (...args: number[]): number => {
    if(args.length == 0){
        return 0;
    } else {
        return args.length;
    }
}
console.log(t2(123));
console.log(t2());