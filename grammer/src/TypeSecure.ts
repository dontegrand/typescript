// 类型注解、类型推断

// 如果ts能自动分析变量类型，我们就什么也不用做
// 如果ts无法分析变量类型的话，我们就需要使用类型注解

let countnumber: number; // 类型注解为bumber
countnumber = 183


const onenumber = 1 // ts类型推断为number
const obj = {
  username: 'curry',
  age: 18
}

function add(a: number, b: number) { // 类型注解参数为number
  return a + b
}

const total = add(1,2) // 自动推断为number