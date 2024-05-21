
class MyClass {
    a: number;
    constructor(a: number){
        this.a = a;
    }
}

let x = new MyClass(1);
// typeof 用于类型判断
console.log(typeof x.a  === 'number')
