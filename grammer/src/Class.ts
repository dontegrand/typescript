// 类

class Lady {
  content = 'hi, curry'
  sayHello() {
    return this.content
  }
}
const gods = new Lady()
gods.sayHello()

class Xiaojie extends Lady {

  // 重写
  sayHello() {
    return super.sayHello() + 'how are you' // super 关键字 调用父类属性及方法
  }

  sayLove() {
    console.log('say love')
  }
}

// 类的访问类型 public / private / protected

class Person {
  name: string // 默认public，类内部作用域和外部作用域都可使用
  private _age: number // 只能类内部作用域调用，外部作用域不可调用
  protected weight: number // 只能在类内部作用域调用和继承时外部作用域调用

  // 类的构造函数
  constructor(name: string) {
    this.name = name
  }
  // 快捷属性写法
  // constructor(public name: string) {
  //   this.name = name
  // }
}

class Cury extends Person{

  constructor(public height: number) {
    super('cury') // 子类写类构造函数时，必需用super调用父类的构造函数
  }

  showInfo() {
    return this.weight
  }
}

const person = new Cury(183)
console.log(person)


// // 对私有属性进行封装处理，set和get处理
class Sporter {

  // 只读属性
  public readonly _name: string

  constructor(private _age: number){}

  setAge(age: number) {
    this._age = age + 3
  }
  getAge() {
    return this._age - 10
  }

  // 静态方法
  static doSomething() {
    console.log('do something')
  }
}
const xiaoming = new Sporter(30)
console.log(xiaoming.age) // 20
xiaoming.age = 15
console.log(xiaoming.age) // 8

Sporter.doSomething()


// 抽象类与抽象方法
abstract class A {
  abstract method(): any
}
// 继承抽象类时，要实现它的抽象方法
class B extends A {
  method() {

  }
}