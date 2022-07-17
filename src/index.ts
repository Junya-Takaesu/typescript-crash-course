// Primitives
let id: number = 5;
let company: string = "順や商事"
let isPublished: boolean = true
let x: any = 'hello'

// Array
let ids: number[] = [1,2,4,5]
let arr: any[] = [1, true, "helllo"]

// Tuple
let person: [number, string, boolean] = [1, 'name', false]
let employee: [number, string][]
employee = [
    [1, 'hoge'],
    [2, 'fuga'],
    [3, 'bar'],
];


// Union
let pid: string | number
pid = 22

enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

// Object
type User = {
    id: number,
    name: string
}
 
const user: User = {
    id: 1,
    name: 'John'
}

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number

// functions
function addNum (x: number, y: number): number {
    return x+y
}

function log(message: string | number): void {
    console.log("Hello");
}

// Interfaces
interface UserInterface {
    id: number
    name: string
    age?: number
}

const user1: UserInterface = {
    id: 1,
    name: "John"
}

user1.id = 5

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y


interface PersonInterface {
    id: number
    name: string
    register(): string
}


// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered`
    }
}

const brad = new Person(1, "Brad Traversy");
const junya = new Person(2, "高江洲順や");


class Employee extends Person {
    position: string
    
    constructor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(3, '八郎', "developper")

console.log(emp.name);
console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4])
let strArray = getArray<string>(['太郎','知ろう','義雄','マサキ'])

strArray.push('hllow')

