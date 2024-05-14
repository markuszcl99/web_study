class MyClass {
    // 1. 声明 public、protected、private 变量
    // public id: number;
    // public name: string;
    // protected phone: string;
    // private salary: number;

    // 2. 声明构造器
    // public constructor(id: number,name:string,phone: string,salary: number){
    //     this.id = id;
    //     this.name = name;
    //     this.phone = phone;
    //     this.salary = salary;
    // }

    // 2.1 构造器 可以被修饰为 public、protected、private，默认就是 public
    // 2.1.1 protected 只能被子类调用，不能被外部调用
    // protected constructor(salary: number){
    //     this.salary = salary;
    // }

    // 2.1.2 private 只能被自己调用，常见的使用场景就是 工厂模式
    // private constructor(id: number, name: string, phone: string, salary: number) {
    //     this.id = id;
    //     this.name = name;
    //     this.phone = phone;
    //     this.salary = salary;
    // }

    // 静态工厂方法
    // public static create(): MyClass{
    //     return new MyClass(1,"markus","123456",1000.0);
    // }

    // 2.2 在构造器中声明属性
    public constructor(
        public age: number
    ) {

    }
}
// protected 修饰的构造器不能被外部调用
// let x: MyClass = new MyClass(1000.0);

// 使用工厂模式 获取 MyClass 对象
// let x = MyClass.create();
// ts 规范：外部只能访问 public 修饰的属性，protected 只能被子类访问，private 只能自己访问
let x = new MyClass(25);
console.log(x.age)
// 但是标注 @ts-ignore 可以忽略 ts 规范
// @ts-ignore
// console.log(x.salary);


// 存取器特性
class MyClass2 {
    accessor x: number = 1;
}
// == 下面这种写法 (这里的 # 代表私有)
class MyClass3 {
    #x: number = 1;
    get x(): number {
        return this.#x;
    }
    set x(val: number) {
        this.#x = val;
    }
}

let x2 = new MyClass2();
x2.x = 10;
console.log(x2.x)

let x3 = new MyClass3();
x3.x = 10;
console.log(x3.x);


// 抽象特性

abstract class MyClass4{
    abstract id: number;
    abstract age: number;
    abstract name: string;
}

class MyClass4Ex extends MyClass4{
    public constructor(
        public id: number,
        public age: number,
        public name: string
    ){
        super();
    }
}

let x4 = new MyClass4Ex(1,25,"markus");
