const myArray: number[] = [1, 2, 3, 4, 5];
let myArray2: any[] = [1, 2, 3, 4, 5 ,"Pee dansatiensakul"];

function sayHello() {
    let myName2: string = "Pee dansatiensakul";
    let myAge: number;
    let canVote: boolean;
    let anything: any;
    let i;
    console.log(myName2);

}

//tuple
let employee: [number ,string,boolean][] = [[1,"Pee dansatiensakul",true],[2,"A",false]];
console.log(employee);
employee.push([3,"B",true]);
console.log(employee);

//enum
enum WorkStatus {
    task = 1,
    Working,
    Done
};

console.log(WorkStatus.Done);