// Basic Types
let id: number = 5
console.log('ID:', id)

let comapanyName: String = 'Poetherapy Ink LTD'
let isPublished: boolean = true
let x: any = 'Welcome'

let ids: number[] = [22,32,44,5,46,34]
let arr: any[] =  [1,true,, 'Welcome']

// Tuple
let person: [number, string, boolean] = [1, 'Sugira', true]

// Tuple array

let employee: [number, string][]

employee =[
    [1, 'Vinc'],
    [2, 'Sugira'],
    [3, 'Prince']
]

// Union

let pid: string | number
pid = '22'

// Enumerated type: allow to define a set pf constants by default it is 0
enum Direction1{
    Up,
    Down,
    Left,
    Right,
} 

console.log(Direction1.Up)

enum Direction2{
    Up= 'Up',
    Down= 'Down',
    Left = 'Left',
    Right = 'Right',
} 

console.log(Direction2.Left)

// Object

const user:{
    id: number
    name: string
} = {
    id: 1,
    name: 'John'
}

// Type assertion

let cid: any=1
let customerID = <number>cid
// or let customerID = cid as number

// Function

function AddNum(x: number,y: number): number{
    return x+y
}

console.log(AddNum(1,3))

function log(message: string | number): void{
    console.log(message)
}

// Interface

interface UserInterface{
    id: number
    name: string
}

const user1: UserInterface ={
    id:1,
    name: 'Vinny'
}