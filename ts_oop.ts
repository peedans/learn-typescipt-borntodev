// class Point{
//     _x: number=0;
//     get x() : number {
//         this._x= this._x+1
//         return this._x;
//     }
//     set x(value : number) {
//         this._x=value;
//     }
// }
// const p = new Point();
// console.log(p._x)
// console.log(p.x);

class Person {
    name: string= "";
    constructor(name){
        this.name = name;
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
}
const person = new Person("John");
person.sayHi();