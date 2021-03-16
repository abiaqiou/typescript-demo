// number
let n1 = 123

// string
let s1 = 'sss'

// boolean
let b1 = true

// literal 字面量，一般与联合符号 | 一起使用
let gender: 'male' | 'female'

// any，任意类型，有显式和隐式之分，强烈不建议使用
let a1: any

// unknown，未知类型，相当于一个类型安全的 any，常用于替代 any
let u1: unknown

// any vs. unknown
let n2: number
// n2 = a1 不报错
// n2 = u1 报错

// 类型断言，开发者告诉 ts 解析器该变量的实际类型
n2 = u1 as number
n2 = <number>u1

// void，表示函数无返回值或默认返回 undefined
function f1(): void {
  console.log('not return');
}

// never，表示函数不会返回任何值，包括 undefined
function f2(): never {
  throw new Error('error')
}

// object，表示对象类型，但因为 js 中数组和函数都是对象，所以并不实用
let o1: object
o1 = { a: 1 }
o1 = [1, 2,]
o1 = function (s: string): void {
  console.log(s)
}

// object 常用的类型表示
let o2: { name: string, age?: number }
o2 = { name: 'abi' }

let o3: { name: string, [key: string]: unknown }
o3 = { name: 'abi', age: 28, gender: 'male' }

// function 常用的类型表示
let f3: (a: number, b: number) => number
f3 = function (m, n) {
  return m + n
}

// array
let arr1: number[]
arr1 = [1, 2, 3,]
let arr2: Array<number>
arr2 = [4, 5, 6,]

// tuple，元组，ts 新增类型，相当于固定长度的数组
let t1: [number, string]
t1 = [1, '2']

// enum，枚举，ts 新增类型
enum Gender {
  female = 0,
  Male = 1,
}
let o4: { name: string, gender: Gender }
o4 = {
  name: 'abi',
  gender: Gender.Male
}

// & 符号
let o5: { name: string } & { age: number }
o5 = { name: 'abi', age: 28 }

// 类型别名
type time = '上午' | '中午' | '下午'
let now: time
now = '上午'