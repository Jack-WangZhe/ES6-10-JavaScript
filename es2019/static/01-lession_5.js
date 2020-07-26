// let与const
{
  let a = 1;
  console.log(a); // 输出1
}
console.log(a) // 无法输出结果,因为let具有块状作用域

// 使用var定义的变量可以通过window来访问,使用let定义的变量无法通过window来访问
var b = 3;
let c = 4;
console.log(b, c); // 输出 3 4
console.log(window.b, window.c); // 输出 3 undefined

// var定义的变量可以重复定义,相当于覆盖之前定义的变量值 / let定义的变量不可以重复定义
var b = 4
let c = 5
console.log(b) // 输出4
console.log(c) // 无法输出结果, let定义的变量无法进行重复定义

// let定义的变量不会进行变量提升

// let的特性,const都具备,且const只能定义常量
const a = 2
a = 3 // 报错,因为const的常量不能被修改
console.log(a)

// const不能在定义时不赋值,但是let和var都可以
const b
b = 3 // 报错
console.log(b)