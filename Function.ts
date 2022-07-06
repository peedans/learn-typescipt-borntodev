function sayHello(name:string ,Age :number,lastname:any) : string {
    return "Hello" + name + "your age is" + Age + "and your lastname is" + lastname;
}
function sum(a:number,b:number,...rest:number[]) : number {
    return a + b + rest.reduce((a,b) => a + b,0);
}
function add({x,y}:{x:number,y:number}) : number {
    return x + y;


}
console.log("Hello"+ sayHello("pee",30,1));
console.log(sum(1,2,3,4,5,6,7,8,9,10));
console.log(add({x:1,y:2}));