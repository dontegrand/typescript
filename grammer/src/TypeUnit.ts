// 联合类型 类型保护

interface A {
  a: boolean
  amethod: () => {}
}
interface B {
  b: boolean
  bmethod: () => {}
}

// agr 参数为联合类型
function aorb(agr: A | B) {
  if (agr.a) {
    // 用断言as做类型保护
    (agr as A).amethod()
  } else {
    (agr as B).bmethod()
  }

  // 用in做类型保护
  if ('amethod' in agr) {
    agr.amethod()
  } 
  if ('bmethod' in agr) {
    agr.bmethod()
  }
}

// 用typeof 做类型保护
function addUnit(one: string | number, two: string | number) {
  if (typeof one === 'string' || typeof two === 'string') {
    return `${one}${two}`
  }
  return one + two
}

// 用 instanceof 做类型保护
class NumberObj {
  count: number
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return  first.count + second.count
  }
  return 0
}