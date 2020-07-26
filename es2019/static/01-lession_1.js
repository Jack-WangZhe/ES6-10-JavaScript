// 全局作用域
// 作用域学习代码,直接创建js文件是为了查看不通过webpack打包的效果
console.log("JACK")
// 全局作用域: 在全局的任意地方都可以拿到变量的值
// 在函数外部定义的变量基本都是全局变量
var name = 'JACK' // 可以在console中使用window.name获取,或直接输出name获取 —— 此方式定义的是全局变量
age = 23 // 不通过var声明也具有全局作用域,但是严格来说此方式定义的内容不能称为全局变量 —— 此方式定义的是全局对象的属性
// 全局变量不可以被删除,但是全局属性可以被删除
// 验证方式 - 在浏览器的console中执行`delete name`无法删除该全局变量 / 在浏览器的console中执行`delete age`是可以成功删除的
// 注意【总结】:没有使用var定义的变量是作为window的属性存在,不属于全局变量,而是全局对象的属性

// 在函数内部没有使用var定义的变量不具有函数内部作用域,而具有全局作用域
function test () {
    sex = 'man' // 在浏览器中直接访问sex可以获得man
}
test()
