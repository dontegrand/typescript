// 数组类型声明

const numberArr = [1, 2, 3]

const stringArr: string[] = ['curry', 'kobe']
const undefinedArr: undefined[] = [undefined, undefined]

const arr = [1, 'cur']
const arr1: (number|string) [] = [1, 'cur']

// 类型别名
type Lady = {name: string, age: number}
const xiao: Lady[] = [
  {name: 'cur', age: 12},
  {name: 'cur2', age: 123}
]