// 接口

interface Girl {
  name: string
  age: number
  school?: string // 可选值

  [propname: string]: any // 自定义属性，key为string，val为any类型
  say():string // function方法，返回值string
}
function getInfo (girl: Girl) {
  console.log(girl.name)
  console.log(girl.age)
  girl.school && console.log(girl.school)
  girl.sex && console.log(girl.sex)
}

const xiag = {
  name: 'xiag',
  age: 23,
  sex: [1231],
  say() {
    return '12'
  }
}

// 类实现interface
class xiaojie implements Girl {
  name = 'car'
  age = 123
  sex = '女'
  say() {
    return 'hello'
  }
}

// 接口继承
interface Teacher extends Girl {
  teach(): string
}

getInfo(xiag)