// Câu hỏi 1: Tìm tổng của các số chẵn trong một mảng.
// const arrNumber = [1, 3, 4, 5, 32, 12, 40, 45, 47, 54]

// const reArrNumber = (arr) => {
//     const newArr = arr.filter(element => element % 2 === 0)
//     return newArr
// }


// const sumNumber = (arr) => {
//     let sum = 0
//     reArrNumber(arr).forEach((element) => {
//         sum += element
//     })
//     return sum
// }

// console.log(sumNumber(arrNumber))

// Câu hỏi 3: Tìm phần tử có giá trị lớn thứ hai trong một mảng.
// const arrNumber = [1, 3, 4, 5, 32, 12, 40, 45, 47, 54]

// const findNumber = (arr, index) => {
//     arr.sort((a, b) => b - a);
//     console.log("arr", arr)
//     return arr[index - 1]
// }
// console.log(findNumber(arrNumber, 3))

// Câu hỏi 5: Chuyển đổi các số lẻ thành số chẵn và ngược lại trong một mảng.
// const arrNumber = [1, 3, 4, 5, 32, 12, 40, 45, 47, 54]
// const newArrNumber = arrNumber.map(element => element + 1)
// console.log("newArrNumber", newArrNumber)

// Bài tập 1: Viết hàm để loại bỏ tất cả các phần tử trùng lặp trong một mảng.

// const arrNumber = [1, 3, 4, 5, 32, 12, 4, 40, 40, 40, 40, 5, 5, 6, 45, 1, 32, 47, 54];
// let newArr = [] //1,3,4,5
// arrNumber.forEach(((element) => {
//     if (element === newArr[newArr.length - 1]) {
//     } else {
//         newArr.push(element)
//     }
// }))
// console.log("newArr", newArr)

// Bài tập 3: Sắp xếp một mảng số nguyên sao cho các số lẻ đứng trước các số chẵn và giữ nguyên thứ tự ban đầu.
// const arrNumber = [1, 3, 4, 5, 32, 13, 4, 40, 6, 45, 1, 33, 47, 54];
// let newArr = []
// const arangeArayNumber = () => {
//     const les = arrNumber.filter(element => element % 2 !== 0)
//     const chans = arrNumber.filter(element => element % 2 === 0)
//     newArr = les.concat(chans)
// }
// arangeArayNumber()
// console.log("newArr", newArr)

// Bài tập 4: Viết hàm chia một mảng thành các mảng con có kích thước nhất định.
// Bài tập 5: Tìm giá trị trung bình của các số trong một mảng.
//     const arrNumber = [3,4,5,6,7,8];

//     const mediumNumber = (arr) => {
//     let sum = 0
//     let dem = 0
//     arr.forEach((element) => {
//         sum += element
//         dem++
//     })
//     return sum/dem
// }
// console.log(mediumNumber(arrNumber))



// Bài tập 6: Sắp xếp một mảng các đối tượng theo một thuộc tính cụ thể.
// Bài tập 7: Viết hàm đảo ngược từng từ trong một chuỗi.
// Bài tập 8: Tìm chuỗi dài nhất trong một mảng các chuỗi.

// const arr = (string) => {
//     let max = 0
//         cnt = ""
//     for(let i=0;i<string.length;i++){
//          if(string[i].length > max){
//               max = string[i].length
//               cnt = string[i]
//          }
//     }
//     return cnt
// }
// console.log(arr(["Thấp","Dài","Cao","Ngắn"]))

// Bài tập 9: Viết hàm thực hiện phép cộng 2 ma trận số nguyên.

    // let  arrNumberone = [[1,2,3,4],[5,6,7,6]]
    // let  arrNumbertwo = [[2,3,4,6],[3,4,5,7]]
    // const sum = (arrNumberone,arrNumbertwo) => {
    //     let arrNumberthree =[[],[]]
    //     for(let i = 0;i<arrNumberone.length;i++){
    //         for(let j=0;j<arrNumbertwo.length;j++){
    //             arrNumberthree[i][j] = arrNumberone[i][j] + arrNumbertwo[i][j]
    //         }
    //     }
    //     return arrNumberthree
    // }
    // console.log(sum(arrNumberone,arrNumbertwo))
// Bài tập 10: Tìm và xóa tất cả các phần tử bị lặp lại trong một mảng số.
    // const arrNumber = (arr) => {
    //     let newarrNumber = [];
    //     for (let i = 0; i < arr.length; i++) {
    //         let cnt = 1;
    //         for (let j = 0; j < i; j++) {
    //             if (arr[j] === arr[i]) {
    //                cnt = 0;
    //             }
    //         }
    //         if (cnt === 1) newarrNumber.push(arr[i]);
    //     }
    //     return newarrNumber;
    // };
    
    // console.log(arrNumber([4,5,7,8,5,6,0,8,9]));
// Bài tập 11: Kiểm tra xem một mảng có phải là dãy số Fibonacci không.
// Bài tập 12: Viết hàm tính tổng các số chia hết cho 3 hoặc 5 trong một khoảng từ 0 đến n.

// const arrNumber = [1, 3, 4, 5, 32, 12, 40, 45, 47, 54]

// const reArrNumber = (arr) => {
//     const newArr = arr.filter(element => element % 3 === 0 || element % 5 ===0)
//     return newArr
// }


// const sumNumber = (arr) => {
//     let sum = 0
//     reArrNumber(arr).forEach((element) => {
//         sum += element
//     })
//     return sum
// }

// console.log(sumNumber(arrNumber))
// Bài tập 13: Tìm và in ra các số nguyên tố đầu tiên trong một mảng có kích thước n.

//     function original(n) {
//         for(let i = 2 ; i< Math.sqrt(n);i++){
//             if(n%i===0){
//                 return  false
//             }
//         }
//         return true
//     }
//     const nto = (arr) => {
//         return arr.filter((number) => original(number))
// }
//     console.log(nto([1,2,3,4,5,6,7,8,9,10]))
// Bài tập 14: Tìm chuỗi con dài nhất không chứa ký tự trùng lặp trong một chuỗi.
// Bài tập 15: Kiểm tra xem một chuỗi có phải là chuỗi Palindrome không (chuỗi đối xứng khi đọc từ trái sang phải hoặc từ phải sang trái đều giống nhau).



