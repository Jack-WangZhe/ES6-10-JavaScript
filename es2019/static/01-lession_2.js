// 函数作用域
function test () {
  var a = 3
  return a + 4
}
console.log(test()) // 可以输出结果7
console.log(a) // 无法输出a,因为a是局部作用域
