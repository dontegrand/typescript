// 基本静态类型
// null, undefined, boolean, void, symbol
const myNum: number = 123
const myName: string = 'curry'

// 引用数据类型
// 对象类型、数组类型、类类型、函数类型
const kebo: {
  name: string,
  age: number
} = {
  name: 'kebo',
  age: 35
}

const xiaxia: string [] = ['xia', 'xia']

class Person {}
const xiaclass: Person = new Person()

const xiafn: () => string = () => 'xia'