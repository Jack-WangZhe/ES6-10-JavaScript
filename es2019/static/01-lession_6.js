// 课后练习
console.log(a);
let a = 1; // 报错 Cannot access 'a' before initialization
var a = 1; // 报错 a is not defined
a = 1; // 输出 undefined

let array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log(array[i]);
  }, 1000);
}
// 输出结果 1 2 3
