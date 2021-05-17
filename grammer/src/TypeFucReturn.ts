// 函数返回类型注解


function getTotal(one: number, two: number): number { // 函数返回number
  return one = two
}
const three = getTotal(1, 2)

// fn(): void {}  没有返回值

// never 表示永远执行不完
function errorFunction(): never {
  throw new Error()
}
function forEver(): never {
  while(true){
    console.log('Hello world')
  }
}


// 函数参数是对象时，声明属性类型的方式
function getNubmer({one}: {one: number}) {
  return one
}
const _one = getNubmer({one: 1})