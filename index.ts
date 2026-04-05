console.log("typescript là ngôn ngữ lập trình ,Nó là Javascript có thêm kiểu dữ liệu Type");
console.log("Typescript giúp: Tránh lỗi code, Code dễ đọc, Dễ bảo trì");





console.log("====================== Kiểu dữ liệu =============================");


let age:number = 20;
let fullName: string =   "Quang Hùng";
let isActive: boolean = true;

if(age > 19){
    console.log("bạn đã đủ tuổi thi đấu ");
}else {
    console.log("bạn chưa đủ tuổi thi đấu ");
}
 
console.log("ngoài ra còn một số kiểu khác như :any, unknown, void, null, undefine");


console.log("======================khai báo mảng==========================");

let listNumbers : number[] = [1,2,3,4,5,6];
let listString : String[] = ["quanghung","thuyan","vandat"];
 

console.log("=====================khai báo object============================");

let users : {name:string, age: number} = {
        name: "Hung",
        age: 20    

}
 console.log("==========================khai báo function=========================");

function sum(a:number, b:number): number {
    return  a + b;
}


