// const arr=[1,2,3,4,5,6,7,8,9];
// arr.push(10)
// const popData = arr.pop()
// console.log(popData)
// arr.unshift(5)
// arr.find
//const student = classArr.find(element => element.address === "Bắc từ liêm")

const classArr = [
    {
        name : "Dũng",
        address : "Mỹ Đình"
    },{
        name : "Tuấn Anh",
        address : "Bắc từ liêm",
    },{
        name : "Đạt",
        address : "Cầu giấy",
    },{
        name : "Hà Anh",
        address : "Nam từ liêm",
    },{
        name : "Mạnh",
        address : "Cầu giấy",
    }
]
 
// const student = classArr.find(element => {
//     console.log(element)
//     return element.address === "Bắc từ liêm"
// }
// )   

// const student = classArr.find((element,index) => element.address === "Cầu giấy")
// console.log("student",student)

// filter

const student = classArr.filter((element,index) => element.address === "Cầu giấy")
console.log("student",student)

//foreach

classArr.forEach((element,index) =>{
    console.log("index",index)
    console.log("element",element)
})

//map

// const newStudents = classArr.map((element,index) => {
//     if(element.name === "Dũng"){
//     element.age = 10
//     element.address = "Thanh Xuân"
//     }
//     return element
// })
// console.log(newStudents)