// 泛型

// 函数中使用泛型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`
}
join<string, number>('curry', 183)

// 在数组中使用泛型
function myArr<T>(params: Array<T>) {
  return params
}
myArr<string>(['a', 'b'])

//类中使用泛型

interface Girl {
  name: string
}

// 泛型的继承
class Seleter <T extends Girl>{   // <T extends number | string> 泛型的约束
  constructor(private girls: T[]) {}
  getGirls(index: number) {
    return this.girls[index].name
  }
}
const eim = new Seleter([
  {name: 'a'},
  {name: 'b'},
  {name: 'c'},
])
console.log(eim.getGirls(1)) 

