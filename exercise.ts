let numberA: number = 20;
let numberB: number = 40;

if(numberA < numberB) {
    console.log("a nhỏ hơn b")
}else if(numberA === numberB) {
    console.log("số a bằng số b")
}else {
    console.log("A lớn hơn b");

}

console.log("bài 1. duyệt các chữ số trong mảng ");

let listNumbers: number[] = [1,2,3,4,5,6,7,8];

for(let i = 0; i<listNumbers.length; i++) {
    console.log(listNumbers[i]);
}

console.log("bài 2:  làm việc với object ");

const introduce: {fullname: string, age: number, job: string} = {
     fullname: "QUanghungf",
     age: 21,
     job: "Software Engineer"
}

console.log("Họ và tên: " + introduce.fullname);
console.log("tuổi "+ introduce.age);
console.log("công việc " + introduce.job);


console.log("==============làm việc với hàm ===============");

function handleSum(a:number, b:number): number  {
     return a + b;
}

let result = handleSum(20,40);
console.log("tổng hai số là " + result);



