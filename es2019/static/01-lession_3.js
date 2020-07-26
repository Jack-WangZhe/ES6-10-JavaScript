// 块状作用域
function test2 () {
  var a = 3
  if (a === 3) {
    var b = 4
    let c = 5
    console.log('abc')
  } else {
    console.log('cba')
  }
  // 在es6之前只有全局作用域和局部作用域,故使用var定义的变量其实就是局部作用域中的数据值,故可以访问
  console.log(b) // 可以输出b的值
  // 使用let或const定义块级作用域变量
  console.log(c) // 无法输出c的值
  return a + 4
}
console.log(test2())
