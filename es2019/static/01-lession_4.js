// 动态作用域
a = 3
function test () {
  console.log(this.a)
}
console.log(test()) // 输出3, this指向与window
test.bind({ a: 100 })() // 输出100, bind表示让函数动态绑定到一个对象上去,此时this的指向就是这个对象
// this是动态指向的
